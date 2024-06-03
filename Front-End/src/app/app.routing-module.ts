import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './component/list-user/list-user.component';
import { FirtAcessExecutivoComponent } from './component/firt-acess-executivo/firt-acess-executivo.component';
import { RegistryEmployeeComponent } from './component/registry-employee/registry-employee.component';
import { ListVariableCostComponent } from './component/list-variable-cost/list-variable-cost.component';

export const routes: Routes = [
    // {path:'executivo/analytics', component: ControlExecutivoAnalyticsComponent}
    {path:'executivo/list-user', component: ListUserComponent},
    {path:'executivo/first-acess', component: FirtAcessExecutivoComponent},
    {path:'executivo/registry-employee', component: RegistryEmployeeComponent},
    {path:'executivo/list-cost-variable', component: ListVariableCostComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {  }