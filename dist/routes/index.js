"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /routes/index.js
const express_1 = __importDefault(require("express"));
const order_routes_1 = __importDefault(require("./order.routes"));
// ...
const router = express_1.default.Router();
// Bonus: you can split this /routes folder in 2: private and public.
// In the private index.js file you would precede all routes declaration
// with a function that checks if the authentication token is present
// in all requests and it's valid.
router.use(order_routes_1.default);
exports.default = router;
