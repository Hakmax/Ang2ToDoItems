import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Injector } from '@angular/core';
import { AppModule } from './app.module';
import { AuthModule } from "./auth/auth.module";
import { UserInfoService } from "./shared/services/userInfoService";
import { CookieService, BaseCookieOptions } from "angular2-cookie/core";

/*var service: UserInfoService = new UserInfoService(new CookieService());
console.log(service);
var userInfoServiceProvider = {
    providers: [{
        provide: UserInfoService, useValue: service
    }]
};*/
var platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule/*, userInfoServiceProvider*/);
platform.bootstrapModule(AuthModule/*, userInfoServiceProvider*/);