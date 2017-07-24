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
const roles_service_1 = require("./services/roles.service");
const role_1 = require("../models/role");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const edit_role_modal_component_1 = require("./edit-role.modal.component");
let RolesComponent = class RolesComponent {
    constructor(_rolesService, _dialogService) {
        this._rolesService = _rolesService;
        this._dialogService = _dialogService;
    }
    loadRoles() {
        this.loading = true;
        this._rolesService.getRoles().subscribe(x => {
            this.roles = x;
            this.loading = false;
        });
    }
    ngOnInit() {
        this.loadRoles();
    }
    editRole(role) {
        console.log("edit");
        this._dialogService.addDialog(edit_role_modal_component_1.EditRoleModalComponent, { role: _.cloneDeep(role) }, { closeByClickingOutside: true }).subscribe(x => {
            if (x && x.role) {
                console.log("save!", x);
                this.loading = true;
                this._rolesService.updateRole(x.role).subscribe(x => {
                    if (x)
                        this.loadRoles();
                    this.loading = false;
                });
            }
        });
    }
    createNewRole() {
        var newRole = new role_1.Role();
        this._dialogService.addDialog(edit_role_modal_component_1.EditRoleModalComponent, { role: _.cloneDeep(newRole) }, { closeByClickingOutside: true }).subscribe(x => {
            if (x && x.role) {
                console.log("create!", x);
                this.loading = true;
                this._rolesService.saveNewRole(x.role).subscribe(x => {
                    if (x)
                        this.loadRoles();
                    this.loading = false;
                });
            }
        });
    }
    removeRole(role) {
        console.log("remove");
    }
};
RolesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: "roles.component.html"
    }),
    __metadata("design:paramtypes", [roles_service_1.RolesService, ng2_bootstrap_modal_1.DialogService])
], RolesComponent);
exports.RolesComponent = RolesComponent;
//# sourceMappingURL=roles.component.js.map