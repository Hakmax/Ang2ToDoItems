import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AuthModule } from "./auth/auth.module";

var platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
platform.bootstrapModule(AuthModule);