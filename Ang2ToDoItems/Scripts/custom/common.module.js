"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const siteContext_1 = require("./shared/siteContext");
let CommonModule = CommonModule_1 = class CommonModule {
    static forRoot() {
        console.log("forRoot");
        if (!this.root) {
            var siteContext = new siteContext_1.SiteContext();
            var siteContextProvider = {
                provide: siteContext_1.SiteContext, useValue: siteContext
            };
            this.root = {
                ngModule: CommonModule_1,
                providers: [siteContextProvider]
            };
        }
        return this.root;
    }
};
CommonModule = CommonModule_1 = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule]
    })
], CommonModule);
exports.CommonModule = CommonModule;
var CommonModule_1;
//# sourceMappingURL=common.module.js.map