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
const router_1 = require("@angular/router");
const category_1 = require("./models/category");
const categoriesService_1 = require("./services/categoriesService");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const editCategoryModal_component_1 = require("./editCategoryModal.component");
const siteContext_1 = require("../shared/siteContext");
const commonDialog_component_1 = require("../shared/commonDialog.component");
var CategoriesViewMode;
(function (CategoriesViewMode) {
    CategoriesViewMode[CategoriesViewMode["List"] = 0] = "List";
    CategoriesViewMode[CategoriesViewMode["Edit"] = 1] = "Edit";
})(CategoriesViewMode || (CategoriesViewMode = {}));
let CategoriesListComponent = class CategoriesListComponent {
    constructor(categoriesService, dialogService, _siteContext, _changeDetector, _router, _activatedRoute) {
        this.categoriesService = categoriesService;
        this.dialogService = dialogService;
        this._siteContext = _siteContext;
        this._changeDetector = _changeDetector;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
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
    loadCategories() {
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
    editCategory(category) {
        this.showDialogForCategory(_.cloneDeep(category));
    }
    showDialogForCategory(category) {
        this.dialogService.addDialog(editCategoryModal_component_1.EditCategoryModalComponent, {
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
        var newCategory = new category_1.Category(null, "");
        this.showDialogForCategory(newCategory);
    }
    removeCategory(category) {
        this.dialogService.addDialog(commonDialog_component_1.CommonDialogComponent, { title: "Удаление категории", text: "Вы действительно хотите удалить категорию?" }, { closeByClickingOutside: true }).subscribe(x => {
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
    saveCategory(category) {
        this.loading = true;
        this.categoriesService.updateCategory(category).subscribe(x => {
            if (x)
                this.loadCategories();
            else
                this.loading = false;
        });
    }
    createCategory(category) {
        this.loading = false;
        this.categoriesService.saveNewCategory(category).subscribe(x => {
            if (x)
                this.loadCategories();
            else
                this.loading = false;
        });
    }
};
CategoriesListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "categories-list",
        templateUrl: "categories.component.html"
    }),
    __metadata("design:paramtypes", [categoriesService_1.CategoriesService, ng2_bootstrap_modal_1.DialogService,
        siteContext_1.SiteContext, core_1.ChangeDetectorRef, router_1.Router,
        router_1.ActivatedRoute])
], CategoriesListComponent);
exports.CategoriesListComponent = CategoriesListComponent;
//# sourceMappingURL=categoriesList.component.js.map