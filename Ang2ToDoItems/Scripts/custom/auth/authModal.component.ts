import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { DialogService, DialogComponent } from "ng2-bootstrap-modal";
import { UserInfoService } from "../shared/services/userInfoService";
import { Observable } from "rxjs/Observable";


declare var module: any;

export interface IAuthModel {
    success: boolean;
}

class UserAuthModel {
    UserName: string;
    Password: string;
}

@Component({
    selector: "auth",
    templateUrl: "authModal.component.html",
    moduleId: module.id
})
export class AuthModalComponent extends DialogComponent<IAuthModel, IAuthModel> implements IAuthModel {
    success: boolean;
    userAuth: UserAuthModel;
    error: string;
    loading: boolean;

    constructor(dialogService: DialogService, private _userInfoService: UserInfoService) {
        super(dialogService);
        this.userAuth = {
            UserName: "",
            Password: ""
        };
    }

    auth() {
        this.loading = true;
        this.error = null;
        setTimeout(() => {
            this._userInfoService.auth(this.userAuth.UserName, this.userAuth.Password).subscribe(x => {
                window.location.reload();
            }, err => {
                this.error = "Произошла ошибка.";
                if (err && err.ErrorMessage)
                    this.error = err.ErrorMessage;
                this.loading = false;
            });
        }, 200);

    }
}