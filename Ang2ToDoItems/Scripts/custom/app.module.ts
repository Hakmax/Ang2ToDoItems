import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CategoriesListComponent } from "./categories/categoriesList.component";
import { RouterModule, Routes } from "@angular/router";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from "./common.module";
import { GuardService } from "./shared/services/guardService";
import { DependencyService } from "./shared/services/dependencyService";
import { RegisterUserComponent } from "./user/registerUser.component";
import { FormsModule } from "@angular/forms";
import { UserService } from "./user/services/userService";
import { RegisterGuard } from "./user/registerGuard";
import { AuthGuard } from "./user/authGuard";
import { UserProfileComponent } from "./user/userProfile.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { CommonDialogComponent } from "./shared/commonDialog.component";

let CustomScriptsPath = "Scripts/custom/"
declare var module: any;
console.log(module);

var platform = platformBrowserDynamic();
let inj: Injector;

var routes = [
    { path: "categories", loadChildren: CustomScriptsPath + "categories/categories.module#CategoriesModule" },
    { path: "categories/:mode/:id", loadChildren: CustomScriptsPath + "categories/categories.module#CategoriesModule" },
    { path: "todoitem", loadChildren: CustomScriptsPath + "todoItems/todoItems.module#ToDoItemsModule" },
    { path: "Account/Register", component: RegisterUserComponent, canActivate: [RegisterGuard] },
    { path: "Account/UserProfile", component: UserProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes), CommonModule.forRoot(), FormsModule,
        BootstrapModalModule.forRoot({ container: document.body })],
    declarations: [AppComponent, RegisterUserComponent, UserProfileComponent, CommonDialogComponent],
    bootstrap: [AppComponent],
    providers: [UserService, RegisterGuard, AuthGuard],
    entryComponents: [CommonDialogComponent]
})
export class AppModule {
    constructor(_injector: Injector) {
        console.log("app.moodule");
        inj = _injector;
        DependencyService.setInjector(inj);
    }
}

