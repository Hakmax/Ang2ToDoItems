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
const userInfo_1 = require("./models/userInfo");
const userInfoService_1 = require("./services/userInfoService");
let UserInfoComponent = class UserInfoComponent {
    constructor(_userInfoService) {
        this._userInfoService = _userInfoService;
        this.userInfo = this.loadInfo();
        if (!this.userInfo)
            this.userInfo = new userInfo_1.UserInfo();
        this.userInfo.Name = "name";
        this.userInfo.Token = "token";
    }
    ngOnInit() {
        console.log("init");
    }
    loadInfo() {
        var info = this._userInfoService.getCookieUserInfo();
        return info;
    }
};
UserInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "userInfo",
        templateUrl: "userInfo.component.html"
    }),
    __metadata("design:paramtypes", [userInfoService_1.UserInfoService])
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=userInfo.component.js.map