"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const registerUser_component_1 = require("./registerUser.component");
const userProfile_component_1 = require("./userProfile.component");
const registerGuard_1 = require("./registerGuard");
const authGuard_1 = require("./authGuard");
var routes = [
    { path: "Account/Register", component: registerUser_component_1.RegisterUserComponent, canActivate: [registerGuard_1.RegisterGuard] },
    { path: "Account/UserProfile", component: userProfile_component_1.UserProfileComponent, canActivate: [authGuard_1.AuthGuard] }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], UserRoutingModule);
exports.UserRoutingModule = UserRoutingModule;
//# sourceMappingURL=user-routing.module.js.map