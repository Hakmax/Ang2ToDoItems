import { Component } from "@angular/core";
import { Category } from "./models/category";
import { DialogService, DialogComponent } from "ng2-bootstrap-modal";
import { FormsModule, NgForm } from "@angular/forms";

export interface IEditCategoryModel {
    category: Category;
}

@Component({
    moduleId: module.id,
    templateUrl: "editCategoryModal.component.html"
})
export class EditCategoryModalComponent extends DialogComponent<IEditCategoryModel, IEditCategoryModel> implements IEditCategoryModel{
    category: Category;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    saveCategory() {
        this.result = {
            category: this.category
        };
        this.close();
    }


}