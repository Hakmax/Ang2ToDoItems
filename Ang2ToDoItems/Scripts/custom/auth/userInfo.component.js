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
const userInfo_1 = require("../shared/models/userInfo");
const userInfoService_1 = require("../shared/services/userInfoService");
const siteContext_1 = require("../shared/siteContext");
const authModal_component_1 = require("./authModal.component");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
let UserInfoComponent = class UserInfoComponent {
    constructor(_userInfoService, _siteContext, _dialogService) {
        this._userInfoService = _userInfoService;
        this._siteContext = _siteContext;
        this._dialogService = _dialogService;
        this.loadInfo();
        this._siteContext.getUser().subscribe(x => {
            this.userInfo = x;
        });
    }
    loadInfo() {
        this._userInfoService.getUser().subscribe(x => {
            console.log("userInfo.component", x);
            var cntx = new userInfo_1.UserContext();
            cntx.Loaded = true;
            cntx.User = x;
            setTimeout(x => {
                this._siteContext.setUser(cntx);
            }, 2000);
        });
    }
    logout() {
        this._userInfoService.logout().subscribe(x => {
            if (x) {
                this._siteContext.setUser(null);
            }
        });
    }
    showAuthModal() {
        this._dialogService.addDialog(authModal_component_1.AuthModalComponent, null, {
            closeByClickingOutside: true
        }).subscribe(x => {
            console.log(x);
        });
    }
};
UserInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "userInfo",
        templateUrl: "userInfo.component.html"
    }),
    __metadata("design:paramtypes", [userInfoService_1.UserInfoService, siteContext_1.SiteContext, ng2_bootstrap_modal_1.DialogService])
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=userInfo.component.js.map