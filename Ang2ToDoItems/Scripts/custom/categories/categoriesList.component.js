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
const category_1 = require("./models/category");
const categoriesService_1 = require("./services/categoriesService");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const editCategoryModal_component_1 = require("./editCategoryModal.component");
const userInfoService_1 = require("../shared/services/userInfoService");
let CategoriesListComponent = class CategoriesListComponent {
    constructor(categoriesService, dialogService, _userInfoService, _changeDetector) {
        this.categoriesService = categoriesService;
        this.dialogService = dialogService;
        this._userInfoService = _userInfoService;
        this._changeDetector = _changeDetector;
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
        userInfoService_1.UserInfoService, core_1.ChangeDetectorRef])
], CategoriesListComponent);
exports.CategoriesListComponent = CategoriesListComponent;
//# sourceMappingURL=categoriesList.component.js.map