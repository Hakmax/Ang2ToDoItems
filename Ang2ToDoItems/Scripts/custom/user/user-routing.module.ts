import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RegisterUserComponent } from "./registerUser.component";
import { UserProfileComponent } from "./userProfile.component";
import { RegisterGuard } from "./registerGuard";
import { AuthGuard } from "./authGuard";
    

var routes = [
    { path: "Account/Register", component: RegisterUserComponent, canActivate: [RegisterGuard] },
    { path: "Account/UserProfile", component: UserProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class UserRoutingModule { }
