"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalZopfOrders = exports.postOrder = void 0;
const express_validator_1 = require("express-validator");
const order_model_1 = require("../../models/order.model");
const orders_db_1 = require("../../data-access/orders.db");
const postOrder = async (req, res) => {
    const isChaptchaValid = await checkCaptcha(req.body.captcha);
    if (!isChaptchaValid)
        return { errors: 'Captcha ist falsch, bist du ein Roboter?' };
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return { errors: errors.array() };
    }
    req.body.orderTime = new Date();
    const newOrder = new order_model_1.ZoBaOrder(req.body);
    return (0, orders_db_1.createZoBaOrder)(newOrder).then(orderId => {
        return orderId;
    }).catch(e => {
        return e;
    });
};
exports.postOrder = postOrder;
const getTotalZopfOrders = async (req, res) => {
    var _a;
    const selectedOrganisation = ((_a = req.query.organisation) === null || _a === void 0 ? void 0 : _a.toString()) || "";
    return (0, orders_db_1.countZopfOrders)().then((ordersByOrganisation) => {
        if (selectedOrganisation === "") {
            return ordersByOrganisation.reduce((sum, current) => sum += current.totalZopfe, 0);
        }
        else {
            return ordersByOrganisation.filter(order => order._id.toLocaleLowerCase() === selectedOrganisation.toLocaleLowerCase()).reduce((sum, current) => sum += current.totalZopfe, 0);
        }
    }).catch(e => {
        return e;
    });
};
exports.getTotalZopfOrders = getTotalZopfOrders;
const checkCaptcha = async (captcha) => {
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Accept': 'application/JSON',
            "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: 'no-cors',
        body: `secret=6LekOEElAAAAALnulk20zm4deUdPI0FjkerSscGZ&response=${captcha}`
    });
    return await resp.json().then(body => {
        return (body === null || body === void 0 ? void 0 : body.success) || false;
    });
};
