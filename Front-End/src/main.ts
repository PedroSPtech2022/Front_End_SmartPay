import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import '@angular/compiler'; // Importing the compiler explicitly

platformBrowserDynamic().bootstrapModule(AppModule);
