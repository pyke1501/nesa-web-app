import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { HttpClientModule } from '@angular/common/http';
import { TimekeepingComponent } from './pages/timekeeping/timekeeping.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { ProcessManagementComponent } from './pages/process-management/process-management.component';
import { KpiManagementComponent } from './pages/kpi-management/kpi-management.component';
import { OkrManagementComponent } from './pages/okr-management/okr-management.component';

// Đăng ký locale tiếng Việt
registerLocaleData(localeVi);
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    AccountSettingsComponent,
    TimekeepingComponent,
    EmployeeManagementComponent,
    ProcessManagementComponent,
    KpiManagementComponent,
    OkrManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  // Cung cấp LOCALE_ID để DatePipe dùng tiếng Việt
  providers: [{ provide: LOCALE_ID, useValue: 'vi' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
