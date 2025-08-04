import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { TimekeepingComponent } from './pages/timekeeping/timekeeping.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { ProcessManagementComponent } from './pages/process-management/process-management.component';
import { KpiManagementComponent } from './pages/kpi-management/kpi-management.component';
import { OkrManagementComponent } from './pages/okr-management/okr-management.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: 'timekeeping', component: TimekeepingComponent },
      { path: 'employee-management', component: EmployeeManagementComponent },
      { path: 'process-management', component: ProcessManagementComponent },
      { path: 'kpi-management', component: KpiManagementComponent },
      { path: 'okr-management', component: OkrManagementComponent }
    ]
  },

  // 3. Chuyển hướng về login nếu không tìm thấy route
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
