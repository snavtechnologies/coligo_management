import { Component, OnInit, Renderer, ViewChild, ElementRef, Directive } from '@angular/core';
import {MenuserviceService } from '../../services/menuservice.service';
import {AuthService} from '../../services/auth.service';
import {NotificationserviceService } from '../../services/notificationservice.service';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { DBOperation } from '../../common_interfaces/db_operation.model';
import { PostingService } from '../../services/posting.service';
import { SpinnerService } from '../../services/spinner.service';
import swal from 'sweetalert2';

// import { ROUTES } from '../.././sidebar/sidebar.component';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

declare var $: any;
@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private nativeElement: Node;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private _router: Subscription;
    username;
    branch_name;
    // trigger_logo: boolean;

    // nav logo
    // @Output() trig_log = new EventEmitter();

    @ViewChild('app-navbar-cmp') button: any;

    constructor(public menuService: MenuserviceService, public spin: SpinnerService, public p: PostingService,
        // tslint:disable-next-line:max-line-length
        location: Location, private renderer: Renderer, private element: ElementRef, private router: Router,  public authService: AuthService,  private notify: NotificationserviceService, private _hotkeysService: HotkeysService) {
            this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        const user_id = this.authService.getLoginSession();
        const get_data: DBOperation = {
          table_name: 'group_permission',
          data: [user_id],
          condition_column: 'userid',
          db: this.authService.getDatabaseSession()
        }
        this.p.do_single_fetch_with_where_condition(get_data)
          .subscribe(response => {
            const data = response.rows;
            const permission = data[0].permission;
            const permission_data = JSON.parse(permission);
        this._hotkeysService.add(new Hotkey('alt+k', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/kyc']);
            if (permission_data['kyc']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+a', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/credit-appraisal']);
           if (permission_data['credit-appraisal']['permission'] === '0') {
             this.notify.permission_alert('You dont have permission to Access !!!');
             this.spin.trig_spin(true);
      } else {
          swal.close();
      }
            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+d+o', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/customer-documents']);
            if (permission_data['customer-documents']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }
            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+l', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/loans/loan_management']);
            if (permission_data['loan_management']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+l+i', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/loans/inventory_management']);
            if (permission_data['inventory_management']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+q', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/loans/gold_loan_management']);
            if (permission_data['gold_loan_management']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+s+g', (event: KeyboardEvent): boolean => {
             this.router.navigate(['/loans/security_generation']);
            if (permission_data['security_generation']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+s', (event: KeyboardEvent): boolean => {
             this.router.navigate(['/deposits/savings_account']);
            if (permission_data['savings_account']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+f+d', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/deposits/fixed_deposit']);
           if (permission_data['fixed_deposit']['permission'] === '0') {
             this.notify.permission_alert('You dont have permission to Access !!!');
             this.spin.trig_spin(true);
      } else {
          swal.close();
      }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+f+c', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/deposits/fixed_products']);
            if (permission_data['fixed_products']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+r', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/deposits/recurring_deposit']);
            if (permission_data['recurring_deposit']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+y', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/deposits/rd_products']);
            if (permission_data['rd_products']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+n', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/accounts/create_new_account']);
            if (permission_data['create_new_account']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+e', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/accounts/credit_debit_entry']);
            if (permission_data['credit_debit_entry']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }


            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+t', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/accounts/daily_transaction']);
            if (permission_data['daily_transaction']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+f', (event: KeyboardEvent): boolean => {
             this.router.navigate(['/accounts/ledger_folio']);
            if (permission_data['ledger_folio']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+w', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/accounts/pending_cheques']);
            if (permission_data['pending_cheques']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+u', (event: KeyboardEvent): boolean => {
             this.router.navigate(['/accounts/statements']);
            if (permission_data['statements']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }


            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+m', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/accounts/consolidated_statements']);
            if (permission_data['consolidated_statements']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }


            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+b', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/accounts/day_book_statements']);
          if (permission_data['day_book_statements']['permission'] === '0') {
             this.notify.permission_alert('You dont have permission to Access !!!');
             this.spin.trig_spin(true);
      } else {
          swal.close();
      }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+h', (event: KeyboardEvent): boolean => {
              this.router.navigate(['/accounts/consolidated_day_book_statements']);
             if (permission_data['consolidated_day_book_statements']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }
            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+z', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/reports/fixed_report']);
          if (permission_data['fixed_report']['permission'] === '0') {
             this.notify.permission_alert('You dont have permission to Access !!!');
             this.spin.trig_spin(true);
      } else {
          swal.close();
      }
            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+x', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/reports/loans_report']);
          if (permission_data['loans_report']['permission'] === '0') {
             this.notify.permission_alert('You dont have permission to Access !!!');
             this.spin.trig_spin(true);
      } else {
          swal.close();
      }
            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+v', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/reports/gold_loan_report']);
            if (permission_data['gold_loan_report']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
          this._hotkeysService.add(new Hotkey('alt+j', (event: KeyboardEvent): boolean => {
            this.router.navigate(['/reports/arrear_report']);
            if (permission_data['arrear_report']['permission'] === '0') {
               this.notify.permission_alert('You dont have permission to Access !!!');
               this.spin.trig_spin(true);
        } else {
            swal.close();
        }

            return false;
          }));
        });
    }

    ngOnInit() {
        this.listTitles = this.menuService.get_routes().filter(listTitle => listTitle);

        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          const $layer = document.getElementsByClassName('close-layer')[0];
          if ($layer) {
            $layer.remove();
          }
        });
       this.username = this.authService.getUsernameSession();
       const branch_code = this.authService.getBranchCodeSession();
       const get_data1: DBOperation = {
        table_name: 'branch_details',
        data: [branch_code],
        condition_column: 'branch_code',
        db: 'nace_fin_head_office'
      }
      this.p.do_single_fetch_with_where_condition(get_data1)
        .subscribe(branch_response => {
          const data1 = branch_response.rows;
          this.branch_name = data1[0].name;
        });
    }
    onResize(event) {
      if ($(window).width() > 991) {
        return false;
      }
      return true;
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function() {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        const $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.mobile_menu_visible === 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            // if ( $layer) {
            //     $layer.remove();
            // }

            setTimeout(function() {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function() {
                $toggle.classList.add('toggled');
            }, 430);

            const $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(function() {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function() { // asign a function
              body.classList.remove('nav-open');
              this.mobile_menu_visible = 0;
              $layer.classList.remove('visible');
              setTimeout(function() {
                  $layer.remove();
                  $toggle.classList.remove('toggled');
              }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    }

    getTitle() {
        const titlee: any = this.location.prepareExternalUrl(this.location.path());
        for (let i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === 'link' && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            } else if (this.listTitles[i].type === 'sub') {
                for (let j = 0; j < this.listTitles[i].children.length; j++) {
                    const subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    }
    getPath() {
        return this.location.prepareExternalUrl(this.location.path());
    }

    logout() {
        this.authService.logout_from_server().subscribe(response => {
            this.authService.logout_from_browser();
            this.router.navigate(['/login']);
            this.notify.showNotification('top', 'right', response.msg, 2);

         }, error => {
                this.notify.showNotification('top', 'right', error, 4);
            });
        }
}
