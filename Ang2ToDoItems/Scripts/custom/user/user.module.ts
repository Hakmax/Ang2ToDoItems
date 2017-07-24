import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RegisterUserComponent } from "./registerUser.component";
import { UserProfileComponent } from "./userProfile.component";
import { RegisterGuard } from "./registerGuard";
import { AuthGuard } from "./authGuard";
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./services/userService";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [UserRoutingModule, FormsModule, CommonModule],
    declarations: [RegisterUserComponent, UserProfileComponent],
    providers: [UserService, RegisterGuard, AuthGuard]
})
export class UserModule { }