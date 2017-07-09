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
const todoItem_1 = require("./models/todoItem");
const todoItemService_1 = require("./services/todoItemService");
const editToDoItemModal2_1 = require("./editToDoItemModal2");
const ng2_bootstrap_modal_1 = require("ng2-bootstrap-modal");
const categoriesService_1 = require("../categories/services/categoriesService");
const userInfo_1 = require("../shared/models/userInfo");
const commonDialog_component_1 = require("../shared/commonDialog.component");
let ToDoItemListComponent = class ToDoItemListComponent {
    constructor(todoItemService, dialogService, categoriesService, userInfo) {
        this.todoItemService = todoItemService;
        this.dialogService = dialogService;
        this.categoriesService = categoriesService;
        this.userInfo = userInfo;
        this.totalItems = 0;
        this.curPage = 0;
        this.loadToDoItems();
        categoriesService.getCategories().subscribe(x => {
            this.categories = x;
        });
    }
    editToDoItem(item) {
        console.log(item);
        this.loading = true;
        setTimeout(() => {
            this.todoItemService.getItem(item.Id).subscribe(x => {
                this.showDialog(_.cloneDeep(item));
            });
            this.loading = false;
        }, 500);
    }
    addNewToDoItem() {
        var newItem = new todoItem_1.ToDoItem(null, "", "", "Новый");
        this.showDialog(newItem);
    }
    pageChanged(event) {
        console.log(event);
        this.curPage = event.page;
        this.loadToDoItems();
    }
    removeToDoItem(item) {
        this.dialogService.addDialog(commonDialog_component_1.CommonDialogComponent, {
            title: "Удаление задачи",
            text: "Вы действительно хотите удалить задачу?"
        }, {
            closeByClickingOutside: true
        }).subscribe(x => {
            if (x && x.closedByOkButton) {
                this.loading = true;
                console.log("delete!");
                this.todoItemService.removeToDoItem(item.Id).subscribe(x => {
                    var index = this.toDoItems.indexOf(item);
                    if (index > -1) {
                        this.toDoItems.splice(index, 1);
                    }
                    this.loading = false;
                });
            }
        });
    }
    showDialog(item) {
        this.dialogService.addDialog(editToDoItemModal2_1.EditToDoItemModal2Component, {
            todoItem: item,
            categories: this.categories
        }, {
            closeByClickingOutside: true
        }).subscribe(res => {
            if (res)
                this.saveToDoItem(res.todoItem);
        });
    }
    saveToDoItem(todoItem) {
        if (todoItem.Id && todoItem.Id > 0) {
            this.todoItemService.updateToDoItem(todoItem).subscribe(x => {
                this.loadToDoItems();
                console.log("put");
            });
        }
        else {
            this.todoItemService.addToDoItem(todoItem).subscribe(x => {
                this.loadToDoItems();
                console.log("post");
            });
        }
    }
    loadToDoItems() {
        this.loading = true;
        setTimeout(() => {
            this.todoItemService.getToDoItems({
                PageSize: 5,
                PageNumber: this.curPage
            }).subscribe(res => {
                this.totalItems = res.TotalCount;
                this.toDoItems = res.Items;
                this.loading = false;
            });
            this.todoItemService.getErr().subscribe(res => {
            }, err => {
                console.log(err);
            }, () => {
                console.log("complete");
            });
        }, 200);
    }
};
ToDoItemListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "todo-list",
        templateUrl: "todoList.component.html"
    }),
    __metadata("design:paramtypes", [todoItemService_1.ToDoItemService, ng2_bootstrap_modal_1.DialogService,
        categoriesService_1.CategoriesService, userInfo_1.UserInfo])
], ToDoItemListComponent);
exports.ToDoItemListComponent = ToDoItemListComponent;
//# sourceMappingURL=todoListComponent.js.map