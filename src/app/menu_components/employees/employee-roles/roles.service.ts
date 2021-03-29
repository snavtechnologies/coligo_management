import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { DBOperation } from 'app/common_interfaces/db_operation.model';
import { EmployeeRole } from 'app/common_interfaces/employee-role.model';
import { AuthService } from 'app/services/auth.service';
import { ErrorService } from 'app/services/error.service';
import { NotificationserviceService } from 'app/services/notificationservice.service';
import { PostingService } from 'app/services/posting.service';
import { SpinnerService } from 'app/services/spinner.service';
import { Observable, Subject, Subscription, throwError } from 'rxjs';
import { HierarchyService } from '../../../services/hierarchy.service';

@Injectable()
export class RolesService implements OnDestroy {
    private role: EmployeeRole;
    private isNewRole: boolean;
    private roles: EmployeeRole[];
    private rolesFetched = new Subject<EmployeeRole[]>();
    private roleAdded = new Subject<boolean>();
    private roleUpdated = new Subject<boolean>();
    private subscriptions = new Subscription();
    private readonly head_db: string;
    private hierarchy: string[];

    constructor (
        private postingService: PostingService,
        private errorService: ErrorService,
        private hierarchyService: HierarchyService,
        private authService: AuthService,
        private spinnerService: SpinnerService,
        private notificationService: NotificationserviceService
    ) {
        this.head_db = this.authService.getHeadDatabaseSession();
    }

    setRole(role: EmployeeRole) {
        this.role = role;
        this.isNewRole = this.role.id === 0;
    };

    getRoles(): Observable<EmployeeRole[]> {
        this.subscriptions.add(this.postingService.do_list_all('employee_roles')
            .subscribe((response) => {
                const roles = response.rows as EmployeeRole[];
                const hierarchyData = this.hierarchyService.getHierarchy(roles);
                this.roles = hierarchyData.itemsWithNamesLink as EmployeeRole[];
                this.hierarchy = hierarchyData.hierarchy;
                this.rolesFetched.next(this.roles);
            },
            error => this.errorService.handle_error(error))
        );
        return this.rolesFetched.asObservable();
    }

    addRole(): Observable<boolean> {
        this.subscriptions
            .add(this.writeRoleToDb()
            .subscribe(idOfInsertedRole => this.appendIdOfRoleToLink(idOfInsertedRole),
            error => this.errorService.handle_error(error))
        );
        return this.roleAdded.asObservable();
    }

    updateRole(): Observable<boolean> {
        this.updateRoleInDb({  name: '\'' + this.role.name + '\''  }, 'Role Updated', this.role.id);
        return this.roleUpdated.asObservable();
    }

    private writeRoleToDb(): Observable<number> {
        const idOfInsertedRole = new Subject<number>();
        const insertData: DBOperation = {
            table_name: 'employee_roles',
            data: { name: this.role.name, link: this.role.link },
            db: this.head_db
        }

        this.subscriptions.add(this.postingService.do_single_insertion(insertData)
            .subscribe(response => {

              if (response.flag === 1) {
                idOfInsertedRole.next(response.inserted_id);
              } else {
                this.notificationService.openSnackBar('Error while insering', '', 'red-snackbar');
              }
            },
            error => this.errorService.handle_error(error))
        );
        return idOfInsertedRole.asObservable();
    }

    private appendIdOfRoleToLink(id: number) {
        const isAppended = new Subject<boolean>();
        if (!id) { return; }
        const linkAfterAppendingId = this.role.link + '~' + id.toString();
        this.updateRoleInDb({ link: '\'' + linkAfterAppendingId + '\'' }, 'Role Added', id);
    }

    private updateRoleInDb (updateData: object, message: string, id: number) {
        const updateQueryData: DBOperation = {
            table_name: 'employee_roles',
            data: updateData,
            condition_string: 'id = ' + id,
            db: this.authService.getHeadDatabaseSession()
        }

        this.subscriptions
            .add(this.postingService.do_custom_update(updateQueryData)
            .subscribe(response => {
                if (response.no_of_rows_updated === 1) {
                    this.notificationService.openSnackBar(message, '', 'green-snackbar');
                    this.updateSubject(true);
                    this.getRoles();
                } else {
                    this.notificationService.openSnackBar('Error while Updating', '', 'red-snackbar');
                    this.updateSubject(false);
                }},
            error => this.errorService.handle_error(error))
        );
    }

    private updateSubject(trueOrFalse: boolean) {
        if (this.isNewRole) { this.roleAdded.next(trueOrFalse); } else { this.roleUpdated.next(trueOrFalse); }
    }

    private appendNameToNamesLinkHead() {
        this.role.namesLink = this.role.namesLinkHead + '->' + this.role.name;
    }

    private replaceNameInNamesLink()  {
        const splittedLinks = this.role.namesLink.split('->');
        splittedLinks[splittedLinks.length - 1] = this.role.name;
        const newLink = splittedLinks.join('->');
        this.role.namesLink = newLink;
    }

    private modifyNamesLink() {
        if (this.isNewRole) { this.appendNameToNamesLinkHead(); } else { this.replaceNameInNamesLink(); }
    }

    isDuplicateRole(): boolean {
        this.modifyNamesLink();
        const isNamesLinkPresentInHierarchy = this.hierarchy.includes(this.role.namesLink);
        if (isNamesLinkPresentInHierarchy) {
            this.notificationService.openSnackBar('Role with same name and head already exists', '', 'red-snackbar');
        }
        return isNamesLinkPresentInHierarchy;
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
