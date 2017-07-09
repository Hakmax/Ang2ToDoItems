import { Injectable } from "@angular/core";
import { UserInfo, UserContext } from "./models/userInfo";
import { Observable} from "rxjs/Observable";
import { Subject } from "rxjs";

@Injectable()
export class SiteContext {
    private _userContext = new Subject<UserContext>();

    getUser(): Observable<UserContext> {
        return this._userContext;
    }

    setUser(userContext: UserContext) {
        this._userContext.next(userContext);
    }
}