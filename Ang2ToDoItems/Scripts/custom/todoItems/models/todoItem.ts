import { Category } from "../../categories/models/category";

export class ToDoItem {
    private static statuses: string[] = ["Новый", "В работе", "Приостановлен", "Отменён", "Завершён"];

    constructor(public Id?: number, public Name?: string, public Comment?: string, public status?: string,
        public Category?: Category) { }

    static getStatuses(): string[] {
        return ToDoItem.statuses;
    }
}
