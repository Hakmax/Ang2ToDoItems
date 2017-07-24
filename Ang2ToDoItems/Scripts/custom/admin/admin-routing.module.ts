import { NgModule } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
import { RolesComponent } from "./roles/roles.component";

var routes = [
    {
        path: "roles", component: RolesComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}