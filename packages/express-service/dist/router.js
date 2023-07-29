"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todolist_1 = __importDefault(require("./controllers/todolist"));
const router = express_1.default.Router();
router.post('/api/todolist', todolist_1.default.add);
exports.default = router;
