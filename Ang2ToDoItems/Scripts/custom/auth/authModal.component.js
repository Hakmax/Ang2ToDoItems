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
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const userInfoService_1 = require("../shared/services/userInfoService");
class UserAuthModel {
}
let AuthModalComponent = class AuthModalComponent extends ng2_bootstrap_modal_1.DialogComponent {
    constructor(dialogService, _userInfoService) {
        super(dialogService);
        this._userInfoService = _userInfoService;
        this.userAuth = {
            UserName: "",
            Password: ""
        };
    }
    auth() {
        this.loading = true;
        this.error = null;
        setTimeout(() => {
            this._userInfoService.auth(this.userAuth.UserName, this.userAuth.Password).subscribe(x => {
                window.location.reload();
            }, err => {
                this.error = "Произошла ошибка.";
                if (err && err.ErrorMessage)
                    this.error = err.ErrorMessage;
                this.loading = false;
            });
        }, 200);
    }
};
AuthModalComponent = __decorate([
    core_1.Component({
        selector: "auth",
        templateUrl: "authModal.component.html",
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService, userInfoService_1.UserInfoService])
], AuthModalComponent);
exports.AuthModalComponent = AuthModalComponent;
//# sourceMappingURL=authModal.component.js.map