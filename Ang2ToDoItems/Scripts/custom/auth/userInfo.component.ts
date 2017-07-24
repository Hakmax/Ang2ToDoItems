import { Component } from "@angular/core";
import { UserInfo, UserContext } from "../shared/models/userInfo";
import { UserInfoService } from "../shared/services/userInfoService";
import { CategoriesModule } from "../categories/categories.module";
import { SiteContext } from "../shared/siteContext";
import { AuthModalComponent } from "./authModal.component";
import { DialogService } from "ng2-bootstrap-modal";

@Component({
    moduleId: module.id,
    selector: "userInfo",
    templateUrl: "userInfo.component.html"
})
export class UserInfoComponent {
    userInfo: UserContext;

    constructor(private _userInfoService: UserInfoService, private _siteContext: SiteContext, private _dialogService: DialogService) {
        this.loadInfo();
        this._siteContext.getUser().subscribe(x => {
            this.userInfo = x;
        });
    }

    private loadInfo() {
        this._userInfoService.getUser().subscribe(x => {
            console.log("userInfo.component", x);
            var cntx = new UserContext();
            cntx.Loaded = true;
            cntx.User = x;
            setTimeout(x => {
                this._siteContext.setUser(cntx);
            }, 2000);
        });
    }

    logout() {
        this._userInfoService.logout().subscribe(x => {
            if (x) {
                this._siteContext.setUser(null);

            }
        });
    }

    showAuthModal() {
        this._dialogService.addDialog(AuthModalComponent, null,
            {
                closeByClickingOutside: true
            }).subscribe(x => {
                console.log(x);
            });
    }
}