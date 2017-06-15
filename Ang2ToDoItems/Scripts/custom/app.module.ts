import { NgModule, Injector } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CategoriesListComponent } from "./categories/categoriesList.component";
import { RouterModule, Routes } from "@angular/router";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserInfoService } from "./shared/services/userInfoService";
import { CommonModule } from "./common.module";
import { GuardService } from "./shared/services/guardService";
import { DependencyService } from "./shared/services/dependencyService";


let CustomScriptsPath = "Scripts/custom/"
declare var module: any;
console.log(module);

var platform = platformBrowserDynamic();
let inj: Injector;

var routes = [
    { path: "categories", loadChildren: CustomScriptsPath + "categories/categories.module#CategoriesModule" },
    { path: "todoitem", loadChildren: CustomScriptsPath + "todoItems/todoItems.module#ToDoItemsModule" }
];

@NgModule({
    imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes), HttpModule, CommonModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]/*,
    providers: [UserInfoService]*/
})
export class AppModule {
    constructor(_injector: Injector) {
        console.log("app.moodule");
        inj = _injector;
        DependencyService.setInjector(inj);
    }
}

