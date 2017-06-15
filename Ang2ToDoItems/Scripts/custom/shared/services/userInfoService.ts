import { Injectable, ReflectiveInjector } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { CookieService } from "angular2-cookie/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { UserInfo } from "../models/userInfo";
import { DependencyService } from "../../shared/services/dependencyService";


@Injectable()
export class UserInfoService {
    userSubject: Subject<UserInfo> = new Subject();
    private _http: Http;

    constructor(private _cookieService: CookieService) {
    }

    change() {
        this.userSubject.next({
            Name: "123",
            Token: new Date().toString()
        });
    }

    getUser(): Observable<UserInfo> {
        this._http = DependencyService.resolve(Http);
        console.log("http", this._http);
        
        return this._http.post("api/user/load", null).map(res => {
            return res.json();
        });

    }

    getCookieUserInfo(): UserInfo {
        var res: UserInfo = null;
        /*var cookieInfo = this.cookieService.get("userData");
        if (cookieInfo)
            res = JSON.parse(cookieInfo);*/
        return res;
    }
}
