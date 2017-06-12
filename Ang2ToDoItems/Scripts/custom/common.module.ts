import { NgModule, ModuleWithProviders } from "@angular/core";
import { UserInfoService } from "./shared/services/userInfoService";
import { CookieService } from "angular2-cookie/services/cookies.service";

@NgModule({

})
export class CommonModule {
    static root: ModuleWithProviders;

    static forRoot(): ModuleWithProviders {
        console.log("forRoot");
        if (!this.root) {
            console.log("createRoot");
            var service: UserInfoService = new UserInfoService(new CookieService());
            var userInfoServiceProvider = {
                provide: UserInfoService, useValue: service
            };
            this.root = {
                ngModule: CommonModule,
                providers: [userInfoServiceProvider]
            };
        }
        return this.root;
    }
}