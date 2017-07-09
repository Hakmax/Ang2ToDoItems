"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
let CommonDialogComponent = class CommonDialogComponent extends ng2_bootstrap_modal_1.DialogComponent {
    constructor(_dialogService) {
        super(_dialogService);
    }
    okClicked() {
        this.result = {
            closedByOkButton: true
        };
        this.close();
    }
};
CommonDialogComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "commonDialog.component.html"
    }),
    __metadata("design:paramtypes", [ng2_bootstrap_modal_1.DialogService])
], CommonDialogComponent);
exports.CommonDialogComponent = CommonDialogComponent;
//# sourceMappingURL=commonDialog.component.js.map