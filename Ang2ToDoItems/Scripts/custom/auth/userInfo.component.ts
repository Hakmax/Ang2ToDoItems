import { Component } from "@angular/core";
import { UserInfo } from "../shared/models/userInfo";
import { UserInfoService } from "../shared/services/userInfoService";
import {CategoriesModule } from "../categories/categories.module";

declare var module: any;
@Component({
    moduleId:module.id,
    selector: "userInfo",
    templateUrl:"userInfo.component.html"
})
export class UserInfoComponent {
    userInfo: UserInfo;

    constructor(private _userInfoService: UserInfoService) {
        this.userInfo = this.loadInfo();
        
        if (!this.userInfo)
            this.userInfo = new UserInfo();
        this.userInfo.Name = "name";
        this.userInfo.Token = "token";

        this._userInfoService.getUser().subscribe(x => {
            console.log("userInfo.component", x);
            this.userInfo = x;
        });
    }

    changeUser() {
        this._userInfoService.change();
    }

    ngOnInit() {
        console.log("init");
    }

    private loadInfo(): UserInfo {
        var info = this._userInfoService.getCookieUserInfo();
        return info;
    }
}