import { Component } from "@angular/core";
import { RolesService } from "./services/roles.service";
import { Role } from "../models/role";
import { DialogService } from "ng2-bootstrap-modal";
import { EditRoleModalComponent } from "./edit-role.modal.component";

declare var _: any;

@Component({
    moduleId: module.id,
    templateUrl: "roles.component.html"
})
export class RolesComponent {
    roles: Role[];
    loading: boolean;

    constructor(private _rolesService: RolesService, private _dialogService: DialogService) {

    }

    private loadRoles() {
        this.loading = true;
        this._rolesService.getRoles().subscribe(x => {
            this.roles = x;
            this.loading = false;
        });
    }

    ngOnInit() {
        this.loadRoles();
    }

    editRole(role: Role) {
        console.log("edit");
        this._dialogService.addDialog(EditRoleModalComponent, { role: _.cloneDeep(role) }, { closeByClickingOutside: true }).subscribe(x => {
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
        var newRole = new Role();
        this._dialogService.addDialog(EditRoleModalComponent, { role: _.cloneDeep(newRole) }, { closeByClickingOutside: true }).subscribe(x => {
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

    removeRole(role: Role) {
        console.log("remove");
    }
}