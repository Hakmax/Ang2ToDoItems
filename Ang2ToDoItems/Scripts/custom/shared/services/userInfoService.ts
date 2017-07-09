import { Injectable, ReflectiveInjector } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { CookieService } from "angular2-cookie/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { UserInfo } from "../models/userInfo";
import { DependencyService } from "../../shared/services/dependencyService";


@Injectable()
export class UserInfoService {
    private  _apiPrefix: string = "api/user/";

    constructor(private _cookieService: CookieService, private _http: Http) {
    }
    

    getUser(): Observable<UserInfo> {
        return this._http.post(this._apiPrefix+ "load", null).map(res => {
            return res.json();
        });

    }

    logout(): Observable<boolean> {
        return this._http.post(this._apiPrefix + "logout", null).map(x => {
            return x.ok;
        });
    }

    auth(userName: string, password: string): Observable<any> {
        return this._http.post(this._apiPrefix + "auth", {
            UserName: userName,
            Password: password
        }).map(x => {
            return x.ok;
            }).catch(y => {
                throw(y.json());
        });
    }

    getCookieUserInfo(): UserInfo {
        var res: UserInfo = null;
        return res;
    }
}
