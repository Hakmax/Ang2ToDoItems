"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDoItem {
    constructor(Id, Name, Comment, status, Category) {
        this.Id = Id;
        this.Name = Name;
        this.Comment = Comment;
        this.status = status;
        this.Category = Category;
    }
    static getStatuses() {
        return ToDoItem.statuses;
    }
}
ToDoItem.statuses = ["Новый", "В работе", "Приостановлен", "Отменён", "Завершён"];
exports.ToDoItem = ToDoItem;
//# sourceMappingURL=todoItem.js.map