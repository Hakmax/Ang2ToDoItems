import { Injectable } from "@angular/core";
import { Http, HttpModule } from "@angular/http";
import { Observable } from "rxjs";
import { RegisterUserModel } from "../models/registerUserModel";
import { ConfigService } from "../../shared/services/commonServices";
import { UserProfile } from "../models/userProfile";

@Injectable()
export class UserService {
    private _userApiUrl: string;
    constructor(private _http: Http) {
        this._userApiUrl = ConfigService.getApiUrl()+"user/";
    }

    registerUser(registerUserModel: RegisterUserModel): Observable<boolean> {
        return this._http.post(this._userApiUrl+"register", registerUserModel).map(x => {
            return x.ok;
        }).catch(err => {
            throw (err.json());
        });
    }

    loadProfile(): Observable<UserProfile> {
        return this._http.post(this._userApiUrl + "loadProfile", null).map(x => {
            return x.json()
        });
    }

    saveProfile(profile: UserProfile): Observable<boolean> {
        return this._http.post(this._userApiUrl + "saveProfile", profile).map(x => {
            return x.ok;
        });
    }
}