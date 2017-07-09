import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from "@angular/router";
import { SiteContext } from "../shared/siteContext";
import { Observable, Subject } from "rxjs";

@Injectable()
export class RegisterGuard implements CanActivate {
    private _canRegister: boolean;
    private _subj=new Subject<boolean>();

    constructor(private _siteContext: SiteContext) {
        
        console.log("constructor");
        _siteContext.getUser().subscribe(x => {
            this._subj.next(x && x.Loaded && x.User == null);
        });
    }

    get canRegister(): boolean {
        return this._canRegister;
    }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        /*return this._siteContext.getUser().subscribe(x => {
            return x.Loaded && x.User != null;
        });*/
        return this._subj;
        /*console.log(this.canRegister);
        return this.canRegister;*/
    }
}