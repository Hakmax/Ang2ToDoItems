"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const todoListComponent_1 = require("./todoListComponent");
const todoItemService_1 = require("./services/todoItemService");
const http_1 = require("@angular/http");
const editToDoItemModal2_1 = require("./editToDoItemModal2");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const forms_1 = require("@angular/forms");
const categoriesService_1 = require("../categories/services/categoriesService");
const ngx_bootstrap_1 = require("ngx-bootstrap");
const userInfo_1 = require("../shared/models/userInfo");
const shared_module_1 = require("../shared/shared.module");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
var routes = [{ path: "", component: todoListComponent_1.ToDoItemListComponent }];
let ToDoItemsModule = class ToDoItemsModule {
};
ToDoItemsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, ng2_bootstrap_modal_1.BootstrapModalModule.forRoot({ container: document.body }),
            forms_1.FormsModule, ngx_bootstrap_1.PaginationModule.forRoot(), shared_module_1.SharedModule, router_1.RouterModule.forChild(routes)],
        declarations: [todoListComponent_1.ToDoItemListComponent, editToDoItemModal2_1.EditToDoItemModal2Component],
        providers: [todoItemService_1.ToDoItemService, categoriesService_1.CategoriesService, userInfo_1.UserInfo],
        entryComponents: [editToDoItemModal2_1.EditToDoItemModal2Component]
    })
], ToDoItemsModule);
exports.ToDoItemsModule = ToDoItemsModule;
//# sourceMappingURL=todoItems.module.js.map