"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const roles_service_1 = require("./roles/services/roles.service");
const admin_routing_module_1 = require("./admin-routing.module");
const roles_component_1 = require("./roles/roles.component");
const forms_1 = require("@angular/forms");
const common_1 = require("@angular/common");
const edit_role_modal_component_1 = require("./roles/edit-role.modal.component");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    core_1.NgModule({
        imports: [admin_routing_module_1.AdminRoutingModule, forms_1.FormsModule, common_1.CommonModule, ng2_bootstrap_modal_1.BootstrapModalModule.forRoot({ container: document.body })],
        providers: [roles_service_1.RolesService],
        declarations: [roles_component_1.RolesComponent, edit_role_modal_component_1.EditRoleModalComponent],
        entryComponents: [edit_role_modal_component_1.EditRoleModalComponent]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map