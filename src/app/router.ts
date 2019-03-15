import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StatusUploadComponent } from './components/status-upload/status-upload.component';
import { App2Component } from './components/app2/app2.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { BuzonComponent } from './components/buzon/buzon.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { NotificationsComponent  } from './components/notifications/notifications.component';


const appRoutes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'', component: App2Component, children:[
    {path:'facturas', component: FacturasComponent},
    {path:'buzon', component: BuzonComponent},
    {path:'profile', component: ProfilesComponent},
    {path:'notifications', component: NotificationsComponent}
  ]},
  {path:'**', component: LoginComponent}

];
@NgModule({
  
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
