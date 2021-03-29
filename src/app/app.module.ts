import { NgModule } from '@angular/core';
// import { MatFormFieldModule, MatSelectModule } from '@angular/material';
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import {HotkeyModule} from 'angular2-hotkeys';
import { ScrollToBottomDirective } from './directives/scroll-to-bottom.directive';

import { AuthGuardService } from './layouts/auth/guards/auth-guard.service';
import { Title } from '@angular/platform-browser';


import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthorizationModule } from './modules/authorization/authorization.module'

import { AppComponent } from './app.component';


import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
// import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { ComponentModule } from './modules/component/component.module';


import { AppRoutes } from './app.routing';



// import { TabLayoutComponent } from './components/tab-layout/tab-layout.component';


@NgModule({
    imports:      [
        CommonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        NgxLoadingModule.forRoot({}),
        HotkeyModule.forRoot(),
        HotkeyModule,
        ComponentModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        HttpClientModule,
        AuthorizationModule,
        // MatSelectModule,
       //  MatFormFieldModule,
      //   NgxMatSelectSearchModule
    ],
    declarations: [
        ScrollToBottomDirective,
        AppComponent,
        AdminLayoutComponent,

        
        // DummyComponent,
        // TabLayoutContentComponent,
        // TabLayoutComponent
    ],
    bootstrap:    [ AppComponent ],
    providers: [AuthGuardService, Title]
})
export class AppModule { }
