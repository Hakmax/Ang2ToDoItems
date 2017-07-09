import { NgModule } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { HttpModule } from "@angular/http";
import { CategoriesListComponent } from "./categoriesList.component";
import { EditCategoryModalComponent } from "./editCategoryModal.component";
import { CategoriesService } from "./services/categoriesService";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BootstrapModalModule } from "ng2-bootstrap-modal";


var routes = [{path: "", component: CategoriesListComponent}];
@NgModule({
    imports: [CommonModule, HttpModule, RouterModule.forChild(routes), FormsModule, BootstrapModalModule.forRoot({ container: document.body })],
    declarations: [CategoriesListComponent, EditCategoryModalComponent],
    providers: [CategoriesService],
    entryComponents: [EditCategoryModalComponent]
})
export class CategoriesModule { }