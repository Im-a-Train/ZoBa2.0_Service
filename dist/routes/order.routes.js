"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require('cors');
const order_controller_1 = __importDefault(require("../controller/order.controller"));
const make_callback_1 = require("./make-callback");
const express_validator_1 = require("express-validator");
const validator_1 = require("../models/validator");
const router = express_1.default.Router();
router.route('/zoBaOrder').post(cors(), (0, express_validator_1.checkSchema)(validator_1.zoBaOrderValidationSchema), (0, make_callback_1.makeExpressCallback)(order_controller_1.default.postOrder));
router.route('/zoBaOrder').options(cors());
router.route('/zoBaOrder/count').get(cors(), (0, make_callback_1.makeExpressCallback)(order_controller_1.default.countTotalZopfOrders));
exports.default = router;
