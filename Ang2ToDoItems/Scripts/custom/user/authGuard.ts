import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { SiteContext } from "../shared/siteContext";

@Injectable()
export class AuthGuard implements CanActivate {
    private _userLoggedIn = new Subject<boolean>();


    constructor(siteContext: SiteContext) {
        siteContext.getUser().subscribe(x => {
            this._userLoggedIn.next(x != null && x.Loaded && x.User != null);
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._userLoggedIn;
    }
}