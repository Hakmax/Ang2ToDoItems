"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const categoriesList_component_1 = require("./categoriesList.component");
const editCategoryModal_component_1 = require("./editCategoryModal.component");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const forms_1 = require("@angular/forms");
const categoriesService_1 = require("./services/categoriesService");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
var routes = [{ path: "", component: categoriesList_component_1.CategoriesListComponent }];
let CategoriesModule = class CategoriesModule {
};
CategoriesModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, ng2_bootstrap_modal_1.BootstrapModalModule.forRoot({ container: document.body }),
            forms_1.FormsModule, router_1.RouterModule.forChild(routes)],
        declarations: [categoriesList_component_1.CategoriesListComponent, editCategoryModal_component_1.EditCategoryModalComponent],
        providers: [categoriesService_1.CategoriesService],
        entryComponents: [editCategoryModal_component_1.EditCategoryModalComponent]
    })
], CategoriesModule);
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=categories.module.js.map