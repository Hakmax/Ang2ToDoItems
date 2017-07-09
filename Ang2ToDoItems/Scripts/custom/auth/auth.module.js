"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const userInfo_component_1 = require("./userInfo.component");
const platform_browser_1 = require("@angular/platform-browser");
const userInfoService_1 = require("../shared/services/userInfoService");
const cookies_service_1 = require("angular2-cookie/services/cookies.service");
const common_module_1 = require("../common.module");
const authModal_component_1 = require("./authModal.component");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const forms_1 = require("@angular/forms");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_module_1.CommonModule.forRoot(), http_1.HttpModule, ng2_bootstrap_modal_1.BootstrapModalModule.forRoot({ container: document.body }), forms_1.FormsModule],
        declarations: [userInfo_component_1.UserInfoComponent, authModal_component_1.AuthModalComponent],
        providers: [userInfoService_1.UserInfoService, cookies_service_1.CookieService],
        bootstrap: [userInfo_component_1.UserInfoComponent],
        entryComponents: [authModal_component_1.AuthModalComponent]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map