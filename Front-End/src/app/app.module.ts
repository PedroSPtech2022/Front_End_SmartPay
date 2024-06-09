import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/general/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuModule } from 'primeng/menu'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./components/general/footer/footer.component";
import { CardModule } from "primeng/card";
import { DialogModule } from "primeng/dialog";
import { AppRoutingModule } from "./app.routing-module";
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { ToolbarModule } from 'primeng/toolbar';
import { ListEmployeeComponent } from "./components/control-center-cost/list-employee/list-employee.component";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { AvatarModule } from "primeng/avatar"
import { AvatarGroupModule } from "primeng/avatargroup";
import { DropdownModule } from "primeng/dropdown";
import { PasswordModule } from "primeng/password";
import { TopbarComponent } from "./components/general/topbar/topbar.component";
import { FirstAcessExecutivoComponent } from "./components/control-center-cost/first-acess-executivo/first-acess-executivo.component";
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RegistryEmployeeComponent } from "./components/control-center-cost/registry-employee/registry-employee.component";
import { ListVariableCostComponent } from "./components/control-center-cost/list-variable-cost/list-variable-cost.component";
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from "./components/auth/login/login.component";
import { NotFoundComponent } from "./components/general/not-found/not-found.component";
import { EmployeeListVariableCostComponent } from "./components/vision-employee/employee-list-variable-cost/employee-list-variable-cost.component";
import { CalendarModule } from "primeng/calendar";
import { InfoCenterCostComponent } from "./components/control-center-cost/info-center-cost/info-center-cost.component";
import { KnobModule } from 'primeng/knob';
@NgModule({
    declarations:[
        AppComponent,
        SidebarComponent,
        FooterComponent,
        TopbarComponent,
        FirstAcessExecutivoComponent,
        InfoCenterCostComponent,
        RegistryEmployeeComponent,
        ListEmployeeComponent,
        ListVariableCostComponent,
        EmployeeListVariableCostComponent,
        LoginComponent,
        NotFoundComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        InputTextModule,
        AppRoutingModule,
        ButtonModule,
        HttpClientModule,
        InputNumberModule,
        MenuModule,
        AvatarModule,
        AvatarGroupModule,
        ToolbarModule,
        CardModule,
        TableModule,
        DialogModule,
        AppRoutingModule,
        DropdownModule,
        PasswordModule,
        StepperModule,
        ToggleButtonModule,
        IconFieldModule,
        InputIconModule,
        SelectButtonModule,
        PanelModule,
        CalendarModule,
        KnobModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule { }