"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const userService_1 = require("./services/userService");
let UserProfileComponent = class UserProfileComponent {
    constructor(userService, _changeDetector) {
        this.userService = userService;
        this._changeDetector = _changeDetector;
        this.loadProfile();
    }
    loadProfile() {
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
};
UserProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "userProfile.component.html"
    }),
    __metadata("design:paramtypes", [userService_1.UserService, core_1.ChangeDetectorRef])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component.js.map