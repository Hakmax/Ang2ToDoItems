"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorService {
    static getErrorMessage(body, ifNull) {
        let res = ifNull;
        if (body && body.ErrorMessage)
            res = body.ErrorMessage;
        return res;
    }
}
exports.ErrorService = ErrorService;
class ConfigService {
    static getApiUrl() {
        return "api/";
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=commonServices.js.map