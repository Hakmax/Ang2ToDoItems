"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const auth_module_1 = require("./auth/auth.module");
const userInfoService_1 = require("./shared/services/userInfoService");
const core_1 = require("angular2-cookie/core");
var service = new userInfoService_1.UserInfoService(new core_1.CookieService());
console.log(service);
var userInfoServiceProvider = {
    providers: [{
            provide: userInfoService_1.UserInfoService, useValue: service
        }]
};
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule /*, userInfoServiceProvider*/);
platform.bootstrapModule(auth_module_1.AuthModule /*, userInfoServiceProvider*/);
//# sourceMappingURL=main.js.map