import { NgModule } from "@angular/core";
import { RolesService } from "./roles/services/roles.service";
import { AdminRoutingModule } from "./admin-routing.module";
import { RolesComponent } from "./roles/roles.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EditRoleModalComponent } from "./roles/edit-role.modal.component";
import { BootstrapModalModule } from "ng2-bootstrap-modal";

@NgModule({
    imports: [AdminRoutingModule, FormsModule, CommonModule, BootstrapModalModule.forRoot({ container: document.body })],
    providers: [RolesService],
    declarations: [RolesComponent, EditRoleModalComponent],
    entryComponents: [EditRoleModalComponent]
})
export class AdminModule {
    
}