import { Component, ChangeDetectorRef } from "@angular/core";
import { UserService } from "./services/userService";
import { UserProfile } from "./models/userProfile";
import { FormsModule } from "@angular/forms";

@Component({
    moduleId: module.id,
    templateUrl: "userProfile.component.html"
})
export class UserProfileComponent {
    private userProfile: UserProfile;
    private loading: boolean;

    constructor(private userService: UserService, private _changeDetector: ChangeDetectorRef) {
        this.loadProfile();
    }

    private loadProfile() {
        this.loading = true;
        this.userService.loadProfile().subscribe(x => {
            this.userProfile = x;
            console.log(x);
            this.loading = false;
            this._changeDetector.detectChanges();
        });
    }

    saveProfile() {
        setTimeout(x => {
            this.loading = true;
            this.userService.saveProfile(this.userProfile).subscribe(x => {
                this.loading = false;
            });
        }, 500);
    }
}