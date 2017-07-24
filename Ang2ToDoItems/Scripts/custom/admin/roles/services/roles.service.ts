import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { Role } from "../../models/role";
import { ConfigService } from "../../../shared/services/commonServices";

@Injectable()
export class RolesService {
    private _rolesApiUrl: string;

    constructor(private _http: Http) {
        this._rolesApiUrl = ConfigService.getApiUrl() + "role/";
    }

    getRoles(): Observable<Role[]> {
        return this._http.get(this._rolesApiUrl + "getAll").map(x => {
            return x.json();
        });
    }

    updateRole(role: Role): Observable<boolean> {
        return this._http.put(this._rolesApiUrl, role).map(x => {
            return x.ok;
        });
    }

    saveNewRole(role: Role): Observable<boolean> {
        return this._http.post(this._rolesApiUrl, role).map(x => {
            return x.ok;
        });
    };
}