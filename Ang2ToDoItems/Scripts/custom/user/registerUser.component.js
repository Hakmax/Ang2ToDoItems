"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const registerUserModel_1 = require("./models/registerUserModel");
const userService_1 = require("./services/userService");
const commonServices_1 = require("../shared/services/commonServices");
let RegisterUserComponent = class RegisterUserComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.registerUserModel = new registerUserModel_1.RegisterUserModel();
    }
    registerUser() {
        this.loading = true;
        this._userService.registerUser(this.registerUserModel).subscribe(x => {
            this.loading = false;
            this.registerSuccess = true;
        }, err => {
            this.error = commonServices_1.ErrorService.getErrorMessage(err, "При регистрации произошла ошибка. Повторите операцию позднее.");
            this.loading = false;
            console.log(this.error);
        });
        console.log(this.registerUserModel);
    }
};
RegisterUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "register-user",
        templateUrl: "registerUser.component.html"
    }),
    __metadata("design:paramtypes", [userService_1.UserService])
], RegisterUserComponent);
exports.RegisterUserComponent = RegisterUserComponent;
//# sourceMappingURL=registerUser.component.js.map