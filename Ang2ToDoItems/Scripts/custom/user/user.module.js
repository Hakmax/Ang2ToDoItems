"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const registerUser_component_1 = require("./registerUser.component");
const userProfile_component_1 = require("./userProfile.component");
const registerGuard_1 = require("./registerGuard");
const authGuard_1 = require("./authGuard");
const user_routing_module_1 = require("./user-routing.module");
const userService_1 = require("./services/userService");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
let UserModule = class UserModule {
};
UserModule = __decorate([
    core_1.NgModule({
        imports: [user_routing_module_1.UserRoutingModule, forms_1.FormsModule, common_1.CommonModule],
        declarations: [registerUser_component_1.RegisterUserComponent, userProfile_component_1.UserProfileComponent],
        providers: [userService_1.UserService, registerGuard_1.RegisterGuard, authGuard_1.AuthGuard]
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map