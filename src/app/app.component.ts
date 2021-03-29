import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  route_name;
   route;
  title = 'angulartitle'
  private _router: Subscription;

  constructor( private router: Router, private titleService: Title) {
  }

    ngOnInit() {
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        this.route_name = event.url;
        this.route = this.route_name.split('/');
        this.route_name = this.route.pop();
        this.route_name = this.route_name.toUpperCase().split('_').join('-');
        this.titleService.setTitle(this.route_name  + ' | Coligo 3.01');
        const body = document.getElementsByTagName('body')[0];
        const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
        if (body.classList.contains('modal-open')) {
          body.classList.remove('modal-open');
          modalBackdrop.remove();
        }
      });
    }
}
