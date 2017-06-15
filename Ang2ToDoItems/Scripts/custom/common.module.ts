import { NgModule, ModuleWithProviders, ReflectiveInjector } from "@angular/core";
import { UserInfoService } from "./shared/services/userInfoService";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HttpModule, Http, XHRBackend, RequestOptions } from "@angular/http";


@NgModule({
    imports: [HttpModule]
})
export class CommonModule {
    static root: ModuleWithProviders;

    static forRoot(): ModuleWithProviders {
        console.log("forRoot");
        if (!this.root) {
            //var http = new Http(XHRBackend, RequestOptions);
            var service: UserInfoService = new UserInfoService(new CookieService());
            var userInfoServiceProvider = {
                provide: UserInfoService, useValue: service
            };
            this.root = {
                ngModule: CommonModule,
                providers: [userInfoServiceProvider,
                    {
                        provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new Http(backend, defaultOptions),
                        deps: [XHRBackend, RequestOptions]
                    }]
            };
        }
        return this.root;
    }
}