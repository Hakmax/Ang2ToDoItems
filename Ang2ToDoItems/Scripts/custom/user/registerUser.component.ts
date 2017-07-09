import { Component } from "@angular/core";
import { RegisterUserModel } from "./models/registerUserModel";
import { FormsModule, NgForm } from "@angular/forms";
import { UserService } from "./services/userService";
import { ErrorService } from "../shared/services/commonServices";

declare var module: any;
@Component({
    moduleId: module.id,
    selector: "register-user",
    templateUrl: "registerUser.component.html"
})
export class RegisterUserComponent {
    private registerUserModel: RegisterUserModel;
    private error: string;
    private loading: boolean;
    private registerSuccess: boolean;

    constructor(private _userService: UserService) {
        this.registerUserModel = new RegisterUserModel();
    }

    registerUser() {
        this.loading = true;
        this._userService.registerUser(this.registerUserModel).subscribe(x => {
            this.loading = false;
            this.registerSuccess = true;
        }, err => {
            this.error = ErrorService.getErrorMessage(err, "При регистрации произошла ошибка. Повторите операцию позднее.");
            this.loading = false;
            console.log(this.error);
        });
        console.log(this.registerUserModel);
    }
}