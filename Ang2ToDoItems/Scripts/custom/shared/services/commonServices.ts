import { Injectable } from "@angular/core";

export class ErrorService {
    static getErrorMessage(body: any, ifNull?: string): string {
        let res = ifNull;
        if (body && body.ErrorMessage)
            res = body.ErrorMessage;

        return res;
    }
}

export class ConfigService {
    static getApiUrl(): string {
        return "api/";
    }
}