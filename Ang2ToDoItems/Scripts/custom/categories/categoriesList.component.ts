import { Component, ChangeDetectorRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Category } from "./models/category";
import { CategoriesService } from "./services/categoriesService";
import { DialogService } from "ng2-bootstrap-modal";
import { EditCategoryModalComponent } from "./editCategoryModal.component";
import { SiteContext } from "../shared/siteContext";
import { UserInfo, UserContext } from "../shared/models/userInfo";
import { CommonDialogComponent } from "../shared/commonDialog.component";
import { Observable, Subject } from "rxjs";
enum CategoriesViewMode {
    List,
    Edit
}

declare var module: any;
declare var _: any;
@Component({
    moduleId: module.id,
    selector: "categories-list",
    templateUrl: "categories.component.html"
})
export class CategoriesListComponent {
    userInfo: UserContext;
    loading: boolean;
    categories: Category[];
    private _currentMode: CategoriesViewMode;
    private _editedId: number;

    constructor(private categoriesService: CategoriesService, private dialogService: DialogService,
        private _siteContext: SiteContext, private _changeDetector: ChangeDetectorRef, private _router: Router,
        private _activatedRoute: ActivatedRoute) {
        if (_activatedRoute.snapshot.params["mode"] == "edit") {
            this._currentMode = CategoriesViewMode.Edit;
            this._editedId = _activatedRoute.snapshot.params["id"];
        }
        this.loadCategories().then(x => {
            if (this._currentMode == CategoriesViewMode.Edit) {
                var categoryForEdit = this.categories.find(x => x.Id == this._editedId);
                if (categoryForEdit)
                    this.editCategory(categoryForEdit);
            }
        });
        var self = this;
        this._siteContext.getUser().subscribe(x => {
            console.log("categoriesList", x);
            this.userInfo = x;
            this._changeDetector.detectChanges();
        });
    }

    loadCategories(): Promise<boolean> {
        this.loading = true;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.categoriesService.getCategories().subscribe(x => {
                    this.categories = x;
                    this.loading = false;
                    resolve(true);
                });
            }, 500);
        });
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

    removeCategory(category: Category) {
        this.dialogService.addDialog(CommonDialogComponent,
            { title: "Удаление категории", text: "Вы действительно хотите удалить категорию?" },
            { closeByClickingOutside: true }).subscribe(x => {
                if (x && x.closedByOkButton) {
                    this.loading = true;
                    this.categoriesService.deleteCategory(category.Id).subscribe(x => {
                        if (x) {
                            this.categories.splice(this.categories.indexOf(category), 1);
                        }
                        this.loading = false;
                    });
                }
            });
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