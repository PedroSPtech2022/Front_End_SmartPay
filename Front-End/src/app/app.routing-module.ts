import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/control-center-cost/list-employee/list-employee.component';
import { FirstAcessExecutivoComponent } from './components/control-center-cost/first-acess-executivo/first-acess-executivo.component';
import { RegistryEmployeeComponent } from './components/control-center-cost/registry-employee/registry-employee.component';
import { ListVariableCostComponent } from './components/control-center-cost/list-variable-cost/list-variable-cost.component';
import { AuthGuard } from './components/auth/guard/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { NotFoundComponent } from './components/general/not-found/not-found.component';
import { EmployeeListVariableCostComponent } from './components/vision-employee/employee-list-variable-cost/employee-list-variable-cost.component';
import { InfoCenterCostComponent } from './components/control-center-cost/info-center-cost/info-center-cost.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'home', component: InfoCenterCostComponent},
    {path:'executivo/first-acess', component: FirstAcessExecutivoComponent},
    {path:'executivo/list-employee', component: ListEmployeeComponent},
    {path:'executivo/registry-employee', component: RegistryEmployeeComponent},
    {path:'executivo/list-cost-variable', component: ListVariableCostComponent},
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