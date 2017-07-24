import { NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CategoriesListComponent } from "./categories/categoriesList.component";
import { RouterModule, Routes } from "@angular/router";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CommonModule } from "./common.module";
import { DependencyService } from "./shared/services/dependencyService";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { CommonDialogComponent } from "./shared/commonDialog.component";
import { UserModule } from "./user/user.module";
import { AdminModule } from "./admin/admin.module";

let CustomScriptsPath = "Scripts/custom/"

var platform = platformBrowserDynamic();
let inj: Injector;

var routes = [
    { path: "categories", loadChildren: CustomScriptsPath + "categories/categories.module#CategoriesModule" },
    { path: "categories/:mode/:id", loadChildren: CustomScriptsPath + "categories/categories.module#CategoriesModule" },
    { path: "todoitem", loadChildren: CustomScriptsPath + "todoItems/todoItems.module#ToDoItemsModule" }
];

@NgModule({
    imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes), CommonModule.forRoot(),
        BootstrapModalModule.forRoot({ container: document.body }), UserModule, AdminModule],
    declarations: [AppComponent, CommonDialogComponent],
    bootstrap: [AppComponent],
    entryComponents: [CommonDialogComponent]
})
export class AppModule {
    constructor(_injector: Injector) {
        console.log("app.moodule");
        inj = _injector;
        DependencyService.setInjector(inj);
    }
}

