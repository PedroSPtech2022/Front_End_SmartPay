import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuModule } from 'primeng/menu'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ControlExecutivoAnalyticsComponent } from "./components/control-executivo-analytics/control-executivo-analytics.component";
import { ControlExecutivoComponent } from "./components/control-executivo/control-executivo.component";
import { ControlFuncionarioComponent } from "./components/control-funcionario/control-funcionario.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardModule } from "primeng/card";


@NgModule({
    declarations:[
        AppComponent,
        SidebarComponent,
        FooterComponent,
        CardModule,
        ControlExecutivoAnalyticsComponent,
        ControlExecutivoComponent,
        ControlFuncionarioComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        MenuModule,
        BrowserAnimationsModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule { }