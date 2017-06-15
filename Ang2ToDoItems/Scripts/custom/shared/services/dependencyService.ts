import { Injectable, Injector } from "@angular/core";

@Injectable()
export class DependencyService {
    private static _injector: Injector;

    public static setInjector(injector: Injector) {
        DependencyService._injector = injector;
    }

    public static resolve(objectType: any): any {
        return DependencyService._injector.get(objectType);
    }
}