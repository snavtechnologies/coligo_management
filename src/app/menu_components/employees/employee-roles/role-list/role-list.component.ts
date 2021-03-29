import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmployeeRole } from 'app/common_interfaces/employee-role.model';
import { ErrorService } from 'app/services/error.service';
import { PostingService } from 'app/services/posting.service';
import { Subscription } from 'rxjs';
import { TableData } from '../../../../common_interfaces/tabledata.model';
import { RolesService} from '../roles.service';
import { RoleCreateComponent } from '../role-create/role-create.component';
import { SearchBox } from 'app/common_interfaces/searchbox.model';
import { DatatableTriggerService } from 'app/services/datatable-trigger.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleListComponent implements OnInit, OnDestroy {
  roles: EmployeeRole[];
  private subscriptions = new Subscription();
  private defaultRole: EmployeeRole = { id: 0, name: '' };
  cursorStyle: string;


  table_data_to_send: TableData = {
    minmax: {
      need_minmax: false
    },
    table: {
      is_datatable: true,
      table_id: 'list_role_table',
      have_non_sort_col: true,
      non_sort_cols: '3',
      need_colour: true,
      color_cols: '',
      need_header: true,
      header: 'sl_no.~role~hierarchy'
    },
    excel: {
      need_export_to_excel: true,
      export_filename: 'trial_xlsx_report_new',
      type: 'xlsx'
    },
    column_search: {
      need_column_search: false
    }
  }

  constructor(
    private dialog: MatDialog,
    private rolesService: RolesService,
    private changeDetector: ChangeDetectorRef,
    private errorService: ErrorService,
    private trigService: DatatableTriggerService
    ) { }



  ngOnInit() {
    this.subscriptions.add(this.rolesService.getRoles().subscribe(roles => {
      this.roles = roles;
      this.changeDetector.markForCheck();
     // this.trigService.trig_datatable(true, this.table_data_to_send.table.table_id, '', true);
    }, error => this.errorService.handle_error(error)));
  }

  private isMD(name: string) { return name === 'Managing Director'; }

  scrollToBottom() { document.getElementById('bottom').scrollIntoView(true); }

  scrollToTop() { document.getElementById('top').scrollIntoView(true); }

  changeCursorStyle(name: string) {
    if (this.isMD(name)) {
      this.cursorStyle = 'auto'
     } else {
       this.cursorStyle = 'pointer'
     }
  }

  openDialog(role: EmployeeRole = this.defaultRole) {
    if (this.isMD(role.name)) { return; }
    const dialogRef = this.dialog;
    dialogRef.open(RoleCreateComponent, { data: { role: role, roles: this.roles, dialogRef: dialogRef } });
    dialogRef.afterAllClosed.subscribe(() => this.scrollToBottom());
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
