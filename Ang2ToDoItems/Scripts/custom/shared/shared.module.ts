import { NgModule } from "@angular/core";
import { UserInfoService } from "./services/userInfoService";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { GuardService } from "./services/guardService";
@NgModule({
    imports: [FormsModule, HttpModule, CommonModule],
    providers: [CookieService, UserInfoService, GuardService]
})
export class SharedModule {

}