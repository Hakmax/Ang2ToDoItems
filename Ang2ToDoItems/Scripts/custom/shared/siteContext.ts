import { Injectable } from "@angular/core";
import { UserInfo } from "./models/userInfo";
import { Observable} from "rxjs/Observable";
import { Subject } from "rxjs";

@Injectable()
export class SiteContext {
    private _user = new Subject<UserInfo>();

    getUser(): Observable<UserInfo> {
        return this._user;
    }

    setUser(user: UserInfo) {
        this._user.next(user);
    }
}