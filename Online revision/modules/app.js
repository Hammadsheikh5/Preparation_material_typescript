"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const add_js_1 = require("./add.js"); //as means mult name chnge to multiplication
const sub_1 = __importDefault(require("./sub"));
(0, add_js_1.add)(2, 3);
sub_1.default.sub(6, 9);
(0, add_js_1.mult)(2, 6);
sub_1.default.div(9, 3);
