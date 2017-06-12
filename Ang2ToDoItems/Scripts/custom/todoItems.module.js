"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const todoListComponent_1 = require("./todoItems/todoListComponent");
const todoItemService_1 = require("./todoItems/services/todoItemService");
const http_1 = require("@angular/http");
const editToDoItemModal2_1 = require("./todoItems/editToDoItemModal2");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const forms_1 = require("@angular/forms");
let ToDoItemsModule = class ToDoItemsModule {
};
ToDoItemsModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, ng2_bootstrap_modal_1.BootstrapModalModule.forRoot({ container: document.body }), forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, todoListComponent_1.ToDoItemListComponent, editToDoItemModal2_1.EditToDoItemModal2Component],
        bootstrap: [app_component_1.AppComponent],
        providers: [todoItemService_1.ToDoItemService],
        entryComponents: [editToDoItemModal2_1.EditToDoItemModal2Component]
    })
], ToDoItemsModule);
exports.ToDoItemsModule = ToDoItemsModule;
//# sourceMappingURL=todoItems.module.js.map