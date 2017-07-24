import { Component } from "@angular/core";
import { ToDoItem } from "./models/todoItem";
import { ToDoItemService } from "./services/todoItemService";
import { EditToDoItemModal2Component } from "./editToDoItemModal2";
import { DialogService } from "ng2-bootstrap-modal";
import { Category } from "../categories/models/category";
import { CategoriesService } from "../categories/services/categoriesService";
import { UserInfo } from "../shared/models/userInfo";
import { CommonDialogComponent } from "../shared/commonDialog.component";

declare var $: any;
declare var _: any;
@Component({
    moduleId: module.id,
    selector: "todo-list",
    templateUrl: "todoList.component.html"
})
export class ToDoItemListComponent {
    toDoItems: ToDoItem[];
    loading: boolean;
    totalItems: number = 0;
    curPage: number = 0;

    private categories: Category[];

    constructor(private todoItemService: ToDoItemService, private dialogService: DialogService,
        private categoriesService: CategoriesService, public userInfo: UserInfo) {
        this.loadToDoItems();
        categoriesService.getCategories().subscribe(x => {
            this.categories = x;
        });
    }

    editToDoItem(item: ToDoItem): void {
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
        var newItem = new ToDoItem(null, "", "", "Новый");
        this.showDialog(newItem);
    }

    pageChanged(event: any) {
        console.log(event);
        this.curPage = event.page;
        this.loadToDoItems();
    }

    removeToDoItem(item: ToDoItem) {
        this.dialogService.addDialog(CommonDialogComponent, {
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

    private showDialog(item: ToDoItem) {
        this.dialogService.addDialog(EditToDoItemModal2Component, {
            todoItem: item,
            categories: this.categories
        }, {
                closeByClickingOutside: true
            }).subscribe(res => {
                if (res)
                    this.saveToDoItem(res.todoItem);
            })
    }

    private saveToDoItem(todoItem: ToDoItem) {
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


    private loadToDoItems() {
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
}