"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var List = function (_a) {
    var items = _a.items;
    return (react_1.default.createElement("ul", { style: { listStyle: 'none' } }, items.map(function (item, index) {
        if (typeof item === 'object') {
            if (index === 0) {
                return (react_1.default.createElement("h3", { key: index },
                    item.item,
                    " ",
                    item.child));
            }
            else {
                return (react_1.default.createElement("li", { key: index },
                    item.item,
                    " ",
                    item.child));
            }
        }
        else {
            if (index === 0) {
                return react_1.default.createElement("h3", { key: index }, item);
            }
            else {
                return react_1.default.createElement("li", { key: index }, item);
            }
        }
    })));
};
exports.default = List;
