import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { FirstAcessExecutivoComponent } from './component/first-acess-executivo/first-acess-executivo.component';
import { RegistryEmployeeComponent } from './component/registry-employee/registry-employee.component';
import { ListVariableCostComponent } from './component/list-variable-cost/list-variable-cost.component';
import { AuthGuard } from './component/auth/guard/auth.guard';
import { LoginComponent } from './component/auth/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    // {path:'executivo/analytics', component: ControlExecutivoAnalyticsComponent}
    {path:'login', component: LoginComponent},
    {path:'executivo/first-acess', component: FirstAcessExecutivoComponent},
    {path:'executivo/list-user', component: ListEmployeeComponent, canActivate:[AuthGuard]},
    {path:'executivo/registry-employee', component: RegistryEmployeeComponent, canActivate:[AuthGuard]},
    {path:'executivo/list-cost-variable', component: ListVariableCostComponent, canActivate:[AuthGuard]},
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