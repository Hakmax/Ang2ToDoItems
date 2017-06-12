"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const userInfo_component_1 = require("./userInfo.component");
const platform_browser_1 = require("@angular/platform-browser");
const cookies_service_1 = require("angular2-cookie/services/cookies.service");
const common_module_1 = require("../common.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule /*, RouterModule.forRoot([{ path: "*", component: UserInfoComponent }])*/, common_module_1.CommonModule.forRoot()],
        declarations: [userInfo_component_1.UserInfoComponent],
        providers: [/*UserInfoService,*/ cookies_service_1.CookieService],
        bootstrap: [userInfo_component_1.UserInfoComponent]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map