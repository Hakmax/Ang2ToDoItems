import { NgModule } from "@angular/core";
import { UserInfoComponent } from "./userInfo.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UserInfoService } from "../shared/services/userInfoService";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CommonModule } from "../common.module";


@NgModule({
    imports: [BrowserModule/*, RouterModule.forRoot([{ path: "*", component: UserInfoComponent }])*/, CommonModule.forRoot()],
    declarations: [UserInfoComponent],
    providers: [/*UserInfoService,*/ CookieService],
    bootstrap:[UserInfoComponent]
})
export class AuthModule {

}
