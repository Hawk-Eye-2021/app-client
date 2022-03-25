"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const http = axios_1.default.create({
    baseURL: "https://hawk-eye-api.herokuapp.com",
});
exports.default = http;
//# sourceMappingURL=http.js.map