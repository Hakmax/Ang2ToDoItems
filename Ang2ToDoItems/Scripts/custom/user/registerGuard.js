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
const siteContext_1 = require("../shared/siteContext");
const rxjs_1 = require("rxjs");
let RegisterGuard = class RegisterGuard {
    constructor(_siteContext) {
        this._siteContext = _siteContext;
        this._subj = new rxjs_1.Subject();
        console.log("constructor");
        _siteContext.getUser().subscribe(x => {
            this._subj.next(x && x.Loaded && x.User == null);
        });
    }
    get canRegister() {
        return this._canRegister;
    }
    canActivate(route, state) {
        /*return this._siteContext.getUser().subscribe(x => {
            return x.Loaded && x.User != null;
        });*/
        return this._subj;
        /*console.log(this.canRegister);
        return this.canRegister;*/
    }
};
RegisterGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [siteContext_1.SiteContext])
], RegisterGuard);
exports.RegisterGuard = RegisterGuard;
//# sourceMappingURL=registerGuard.js.map