import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { UserInfoComponent } from "./userInfo.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UserInfoService } from "../shared/services/userInfoService";
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CommonModule } from "../common.module";
import { AuthModalComponent } from "./authModal.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { FormsModule, NgForm } from "@angular/forms";


@NgModule({
    imports: [BrowserModule, CommonModule.forRoot(), HttpModule, BootstrapModalModule.forRoot({ container: document.body }), FormsModule],
    declarations: [UserInfoComponent, AuthModalComponent],
    providers: [UserInfoService, CookieService],
    bootstrap: [UserInfoComponent],
    entryComponents: [AuthModalComponent]
})
export class AuthModule {

}
