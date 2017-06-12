import { Injectable } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { CookieService } from "angular2-cookie/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";

import {UserInfo } from "../models/userInfo";

@Injectable()
export class UserInfoService {
    userSubject: Subject<UserInfo> = new Subject();

    constructor(private cookieService: CookieService) {
            
    }

    change() {
        this.userSubject.next({
            Name: "123",
            Token: new Date().toString()
        });
    }

    getUser(): Observable<UserInfo> {
        return this.userSubject;
    }

    getCookieUserInfo(): UserInfo {
        var res: UserInfo = null;
        /*var cookieInfo = this.cookieService.get("userData");
        if (cookieInfo)
            res = JSON.parse(cookieInfo);*/
        return res;
    }
}
