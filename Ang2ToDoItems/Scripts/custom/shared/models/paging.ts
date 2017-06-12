export class PageListResponse<T>{
    TotalCount: number;
    Items: T[];
}

export class PageListRequest {
    PageSize: number;
    PageNumber: number;
}