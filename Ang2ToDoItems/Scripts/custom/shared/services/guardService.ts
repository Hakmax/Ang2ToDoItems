import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class GuardService {

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        var result = true;
        console.log(route, state);
        
        return result;
    }

    canLoad(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        var result = false;
        console.log(route, state);

        return result;
    }
}