import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MenuModule } from 'primeng/menu'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    declarations:[
        AppComponent,
        SidebarComponent
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