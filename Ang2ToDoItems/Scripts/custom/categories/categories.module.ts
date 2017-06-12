import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule } from "@angular/http";
import { CategoriesListComponent } from "./categoriesList.component";
import { EditCategoryModalComponent } from "./editCategoryModal.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal";
import { FormsModule } from "@angular/forms";
import { CategoriesService } from "./services/categoriesService";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


var routes = [{path: "", component: CategoriesListComponent}];
@NgModule({
    imports: [CommonModule, HttpModule, BootstrapModalModule.forRoot({ container: document.body }),
        FormsModule, RouterModule.forChild(routes)],
    declarations: [CategoriesListComponent, EditCategoryModalComponent],
    providers: [CategoriesService],
    entryComponents: [EditCategoryModalComponent]
})
export class CategoriesModule { }