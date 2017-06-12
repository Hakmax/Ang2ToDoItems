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
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const shared_module_1 = require("./shared/shared.module");
const router_1 = require("@angular/router");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const common_module_1 = require("./common.module");
let CustomScriptsPath = "Scripts/custom/";
console.log(module);
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
let inj;
var routes = [
    { path: "categories", loadChildren: CustomScriptsPath + "categories/categories.module#CategoriesModule" },
    { path: "todoitem", loadChildren: CustomScriptsPath + "todoItems/todoItems.module#ToDoItemsModule" }
];
let AppModule = class AppModule {
    constructor(_injector) {
        this._injector = _injector;
        inj = _injector;
    }
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, shared_module_1.SharedModule, router_1.RouterModule.forRoot(routes), common_module_1.CommonModule.forRoot()],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent] /*,
        providers: [UserInfoService]*/
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map