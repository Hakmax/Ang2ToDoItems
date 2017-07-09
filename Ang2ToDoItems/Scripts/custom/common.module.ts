import { NgModule, ModuleWithProviders, ReflectiveInjector } from "@angular/core";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HttpModule, Http, XHRBackend, RequestOptions } from "@angular/http";
import { SiteContext } from "./shared/siteContext";

@NgModule({
    imports: [HttpModule]
})
export class CommonModule {
    static root: ModuleWithProviders;

    static forRoot(): ModuleWithProviders {
        console.log("forRoot");
        if (!this.root) {
            var siteContext = new SiteContext();
            var siteContextProvider = {
                provide: SiteContext, useValue: siteContext
            };
            this.root = {
                ngModule: CommonModule,
                providers: [siteContextProvider]
            };
        }
        return this.root;
    }
}