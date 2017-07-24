import { Component } from "@angular/core";
import { DialogService, DialogComponent } from "ng2-bootstrap-modal";
import { Role } from "../models/role"; 

export interface IEditRoleModalModel {
    role: Role;
}

@Component({
    moduleId: module.id,
    templateUrl: "edit-role.modal.component.html"
})
export class EditRoleModalComponent extends DialogComponent<IEditRoleModalModel, IEditRoleModalModel> implements IEditRoleModalModel{
    role: Role;

    constructor(private _dialogService: DialogService) {
        super(_dialogService);
    }

    okClicked() {
        this.result = {
            role: this.role
        };
        this.close();
    }
}