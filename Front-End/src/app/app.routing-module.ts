import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './component/control-center-cost/list-employee/list-employee.component';
import { FirstAcessExecutivoComponent } from './component/control-center-cost/first-acess-executivo/first-acess-executivo.component';
import { RegistryEmployeeComponent } from './component/control-center-cost/registry-employee/registry-employee.component';
import { ListVariableCostComponent } from './component/control-center-cost/list-variable-cost/list-variable-cost.component';
import { AuthGuard } from './component/auth/guard/auth.guard';
import { LoginComponent } from './component/auth/login/login.component';
import { NotFoundComponent } from './component/general/not-found/not-found.component';
import { EmployeeListVariableCostComponent } from './component/vision-employee/employee-list-variable-cost/employee-list-variable-cost.component';
import { InfoCenterCostComponent } from './component/control-center-cost/info-center-cost/info-center-cost.component';

export const routes: Routes = [
    // {path:'executivo/analytics', component: ControlExecutivoAnalyticsComponent}
    {path:'login', component: LoginComponent},
    {path:'executivo/first-acess', component: FirstAcessExecutivoComponent},
    {path:'executivo/list-user', component: ListEmployeeComponent},
    {path:'executivo/registry-employee', component: RegistryEmployeeComponent},
    {path:'executivo/list-cost-variable', component: ListVariableCostComponent},
    {path:'executivo/info-center-cost', component:InfoCenterCostComponent},
    {path:'employee/list-cost-variable', component: EmployeeListVariableCostComponent},
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'**',redirectTo:'/notFound'},
    {path:'notFound', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[AuthGuard]
})

export class AppRoutingModule {  }

// , canActivate:[AuthGuard]