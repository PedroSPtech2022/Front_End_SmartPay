import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuModule } from 'primeng/menu'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./component/footer/footer.component";
import { CardModule } from "primeng/card";
import { DialogModule } from "primeng/dialog";
import { AppRoutingModule } from "./app.routing-module";
import { TableModule } from "primeng/table";
import { HttpClientModule } from "@angular/common/http";
import { ToolbarModule } from 'primeng/toolbar';
import { ListEmployeeComponent } from "./component/list-employee/list-employee.component";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { InputNumberModule } from "primeng/inputnumber";
import { AvatarModule } from "primeng/avatar"
import { AvatarGroupModule } from "primeng/avatargroup";
import { DropdownModule } from "primeng/dropdown";
import { PasswordModule } from "primeng/password";
import { TopbarComponent } from "./component/topbar/topbar.component";
import { FirstAcessExecutivoComponent } from "./component/first-acess-executivo/first-acess-executivo.component";
import { StepperModule } from 'primeng/stepper';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RegistryEmployeeComponent } from "./component/registry-employee/registry-employee.component";
import { ListVariableCostComponent } from "./component/list-variable-cost/list-variable-cost.component";
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from "./component/auth/login/login.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

@NgModule({
    declarations:[
        AppComponent,
        SidebarComponent,
        FooterComponent,
        TopbarComponent,
        FirstAcessExecutivoComponent,
        RegistryEmployeeComponent,
        ListEmployeeComponent,
        ListVariableCostComponent,
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
        PanelModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule { }