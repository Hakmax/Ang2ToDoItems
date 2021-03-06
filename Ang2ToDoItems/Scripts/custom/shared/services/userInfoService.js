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
const core_2 = require("angular2-cookie/core");
const rxjs_1 = require("rxjs");
let UserInfoService = class UserInfoService {
    constructor(cookieService) {
        this.cookieService = cookieService;
        this.userSubject = new rxjs_1.Subject();
    }
    change() {
        this.userSubject.next({
            Name: "123",
            Token: new Date().toString()
        });
    }
    getUser() {
        return this.userSubject;
    }
    getCookieUserInfo() {
        var res = null;
        /*var cookieInfo = this.cookieService.get("userData");
        if (cookieInfo)
            res = JSON.parse(cookieInfo);*/
        return res;
    }
};
UserInfoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], UserInfoService);
exports.UserInfoService = UserInfoService;
//# sourceMappingURL=userInfoService.js.map