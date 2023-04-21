"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_order_1 = require("../use-cases/order/post-order");
exports.default = Object.freeze({
    countTotalZopfOrders: (req, res) => (0, post_order_1.getTotalZopfOrders)(req, res),
    postOrder: (req, res) => (0, post_order_1.postOrder)(req, res),
    // ...
});
