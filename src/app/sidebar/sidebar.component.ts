import { Component, OnInit } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import {MenuserviceService } from '../services/menuservice.service';
import {AuthService} from '../services/auth.service';
// import {Title} from '../services/title.service';
import { PostingService } from '../services/posting.service';
import { DBOperation} from '../common_interfaces/db_operation.model';
import { NotificationserviceService } from '../services/notificationservice.service';
import { SpinnerService } from '../services/spinner.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Title } from '@angular/platform-browser';
import CryptoJS from 'crypto-js';
import { copyStyles } from '@angular/animations/browser/src/util';

declare const $: any;

@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
@Directive({
  selector: '[appDisableRightClick]'
})


export class SidebarComponent implements OnInit {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }
    public menuItems: any[];
    public menuItems_user: any[];
// tslint:disable-next-line: max-line-length
    constructor(public menuService: MenuserviceService, private _router: Router, public spin: SpinnerService, public notify: NotificationserviceService, public p: PostingService, public authService: AuthService, private titleService: Title) {}


    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    /*goToLink(url: string)  {
        let hashkey = '1234' + url;
        let hash_val = (CryptoJS.SHA256(hashkey).toString(CryptoJS.enc.Hex)).toUpperCase();
        let sig = this.authService.getSigSession();
        window.open('localhost/auth_nidhi/?p=' + hash_val + '_' + sig, '_blank');
    }*/
    ngOnInit() {
        // if (this.authService.getRoleSession() === 'admin') {
        this.menuItems = this.menuService.get_routes().filter(menuItem => menuItem);
       // } else if (this.authService.getRoleSession() === 'user') {
       // this.menuItems_user = this.menuService.get_routes_user().filter(menuItem_user => menuItem_user);

// }
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            const ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    permission(val) {
       const route = val.split('/');
        const route_name = route.pop();
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
              this._router.navigate(['/' + route_name]);
             if (permission_data[route_name]['permission'] === '0') {
               // this.spin.trig_spin(true);
             // this._router.navigate(['/' + route_name]);
                this.notify.permission_alert('You dont have permission to Access !!!');
               // this.spin.trig_spin(true);
         } else {
           // this._router.navigate(['/' + route_name]);
             swal.close();
         }
        });

    }
    permission_sub(menu_val, sub_val) {
        const route = menu_val.split('/');
         const route_name = route.pop();
         console.log(route_name);
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
            this._router.navigate([menu_val + '/' + sub_val]);
             if (permission_data[sub_val]['permission'] === '0' && permission_data[route_name]['permission'] === '1' ) {

                this.notify.permission_alert('You dont have permission to Access !!!');
         } else {
           // this._router.navigate(['/' + route_name]);
             swal.close();
         }
        });

    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    
}
