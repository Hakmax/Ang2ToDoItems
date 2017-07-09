import { Component } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface CommonDialogOptions {
    title: string;
    text: string;
}

export interface CommonDialogResult {
    closedByOkButton: boolean;
}

declare var module: any;
@Component({
    moduleId: module.id,
    templateUrl:"commonDialog.component.html"
})
export class CommonDialogComponent extends DialogComponent<CommonDialogOptions, CommonDialogResult> implements CommonDialogOptions {
    title: string;
    text: string;

    constructor(_dialogService: DialogService) {
        super(_dialogService);
    }

    okClicked() {
        this.result = {
            closedByOkButton: true
        };
        this.close();
    }
}