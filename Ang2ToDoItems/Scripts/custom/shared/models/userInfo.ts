import { Injectable } from "@angular/core";

//@Injectable()
export class UserInfo {

    Name: string;
    Token: string;
    constructor() { }
}

export class UserContext {
    Loaded: boolean;
    User: UserInfo;
}