import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router';
import { LoginComponent } from './components/login/login.component';
import { App2Component } from './components/app2/app2.component';
import { StatusUploadComponent } from './components/status-upload/status-upload.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BuzonComponent } from './components/buzon/buzon.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
const config: SocketIoConfig = { url:  /* '192.168.1.159:2002' */ /**//* 'http://vasster.com:2002'  */'http://localhost:2002', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    App2Component,
    StatusUploadComponent,
    FacturasComponent,
    SideNavComponent,
    BuzonComponent,
    ProfilesComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
