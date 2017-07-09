import { Injectable } from "@angular/core";
import { ToDoItem } from "../models/todoItem";
import { Observable } from "rxjs/Observable";
import { Http, Request, RequestMethod } from "@angular/http";
import { PageListRequest, PageListResponse } from "../../shared/models/paging";

import 'rxjs/add/operator/map';
declare var $: any;

@Injectable()
export class ToDoItemService {
    private readonly ToDoItemsApiUrl = "api/todoitem/";

    constructor(private http: Http) {

    }

    getToDoItems(request: PageListRequest): Observable<PageListResponse<ToDoItem>> {
        return this.http.get(this.ToDoItemsApiUrl + "getAll?" + $.param(request)).map(x => x.json());
    }

    getItem(id: number): Observable<ToDoItem> {
        return this.http.get(this.ToDoItemsApiUrl + "get?id=" + id).map(x => x.json());
    }

    getErr(): Observable<ToDoItem[]> {
        return this.http.get(this.ToDoItemsApiUrl +"geterr").map(x => x.json());
    }

    updateToDoItem(toDoItem: ToDoItem): Observable<any> {
        return this.http.put(this.ToDoItemsApiUrl, toDoItem).map(x => {
            return x.ok;
        });
    }

    addToDoItem(toDoItem: ToDoItem): Observable<any> {
        return this.http.post(this.ToDoItemsApiUrl, toDoItem).map(x => {
            return x.ok;
        });
    }

    removeToDoItem(id: number): Observable<any> {
        return this.http.delete(this.ToDoItemsApiUrl+"?id="+ id).map(x => {
            return x.ok;
        });
    }
}