import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import {Category } from "../models/category";

@Injectable()
export class CategoriesService {
    private readonly CategoriesApiUrl: string = "api/category/";

    constructor(private http: Http) {

    }

    getCategories(): Observable<Category[]> {
        return this.http.get(this.CategoriesApiUrl + "getAll").map(x => {
            return x.json();
        });
    }

    saveNewCategory(category: Category): Observable<any> {
        return this.http.post(this.CategoriesApiUrl, category).map(x => {
            return x.ok;
        });
    }

    updateCategory(category: Category): Observable<any> {
        return this.http.put(this.CategoriesApiUrl, category).map(x => {
            return x.ok;
        });
    }

    deleteCategory(id: number): Observable<boolean> {
        return this.http.delete(this.CategoriesApiUrl + "?id=" + id).map(x => {
            return x.ok;
        });
    }
}
