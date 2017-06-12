import { NgModule } from "@angular/core";
import { ToDoItemListComponent } from "./todoListComponent";
import { ToDoItemService } from "./services/todoItemService";
import { HttpModule } from "@angular/http";
import { EditToDoItemModal2Component } from "./editToDoItemModal2";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FormsModule } from "@angular/forms";
import { CategoriesService } from "../categories/services/categoriesService";
import { PaginationModule } from "ngx-bootstrap";
import { UserInfo } from "../shared/models/userInfo";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

var routes = [{ path: "", component: ToDoItemListComponent }];

@NgModule({
    imports: [CommonModule, HttpModule, BootstrapModalModule.forRoot({ container: document.body }),
        FormsModule, PaginationModule.forRoot(), SharedModule, RouterModule.forChild(routes)],
    declarations: [ToDoItemListComponent, EditToDoItemModal2Component],
    providers: [ToDoItemService, CategoriesService, UserInfo],
    entryComponents: [EditToDoItemModal2Component]
})
export class ToDoItemsModule { }