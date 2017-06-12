import { Component, ChangeDetectorRef } from "@angular/core";
import { Category } from "./models/category";
import { CategoriesService } from "./services/categoriesService";
import { DialogService } from "ng2-bootstrap-modal";
import { EditCategoryModalComponent } from "./editCategoryModal.component";
import { UserInfoService } from "../shared/services/userInfoService";
import { UserInfo } from "../shared/models/userInfo";


declare var module: any;
declare var _: any;
@Component({
    moduleId: module.id,
    selector: "categories-list",
    templateUrl: "categories.component.html"
})
export class CategoriesListComponent {
    userInfo: UserInfo;
    loading: boolean;
    categories: Category[];

    constructor(private categoriesService: CategoriesService, private dialogService: DialogService,
        private _userInfoService: UserInfoService, private _changeDetector: ChangeDetectorRef) {
        this.userInfo = {
            Name: "test|",
            Token: ""
        };
        this.loadCategories();
        var self = this;
        this._userInfoService.getUser().subscribe(x => {
            console.log("categoriesList", x);
            this.userInfo = x;
            this._changeDetector.detectChanges();
        });
    }

    loadCategories() {
        this.loading = true;
        setTimeout(() => {
            this.categoriesService.getCategories().subscribe(x => {
                this.categories = x;
                this.loading = false;
            });
        }, 500);
    }

    editCategory(category: Category) {
        this.showDialogForCategory(_.cloneDeep(category));
    }

    private showDialogForCategory(category: Category) {
        this.dialogService.addDialog(EditCategoryModalComponent, {
            category: category
        }, { closeByClickingOutside: true }).subscribe(x => {
            if (x) {
                if (x.category.Id > 0)
                    this.saveCategory(x.category);
                else
                    this.createCategory(x.category);
            }
        });
    }

    showCreateCategoryModal() {
        var newCategory = new Category(null, "");
        this.showDialogForCategory(newCategory);
    }

    private saveCategory(category: Category) {
        this.loading = true;
        this.categoriesService.updateCategory(category).subscribe(x => {
            if (x)
                this.loadCategories();
            else
                this.loading = false;
        });
    }

    private createCategory(category: Category) {
        this.loading = false;
        this.categoriesService.saveNewCategory(category).subscribe(x => {
            if (x)
                this.loadCategories();
            else
                this.loading = false;
        });
    }
}