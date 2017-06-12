import { Component } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { ToDoItem } from "./models/todoItem";
import { Category } from "../categories/models/category";
import { FormsModule, NgForm } from "@angular/forms";
import { Observable } from "rxjs/Observable";

export interface ConfirmModel {
    todoItem: ToDoItem;
    categories: Category[];
}

declare var module: any;
@Component({
    moduleId: module.id,
    selector: "editToDoItem2",
    templateUrl: "editToDoItemModal2.component.html"
})
export class EditToDoItemModal2Component extends DialogComponent<ConfirmModel, ConfirmModel> implements ConfirmModel {
    todoItem: ToDoItem;
    categories: Category[];


    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    fillData(data: ConfirmModel): Observable<any> {
        if (data.todoItem.Category)
            data.todoItem.Category = data.categories.find(x => x.Id == data.todoItem.Category.Id);
        else
            data.todoItem.Category = data.categories[0];
        return super.fillData(data);
    }


    get statuses(): string[] {
        return ToDoItem.getStatuses();
    }

    saveClicked(form: NgForm) {
        console.log(form);
        this.result = {
            todoItem: this.todoItem, categories: this.categories
        };
        this.close();

    }
}