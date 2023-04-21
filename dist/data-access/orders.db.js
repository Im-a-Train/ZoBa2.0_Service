"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countZopfOrders = exports.createZoBaOrder = void 0;
const mongoDBClient_1 = require("./mongoDBClient");
const count_zopf_orders_model_1 = require("../models/count.zopf.orders.model");
const zoBaOrderCollection = 'zobBaOrders';
const createZoBaOrder = async (zoBaOrder) => {
    const db = await (0, mongoDBClient_1.mongoDB)();
    const orderCollection = await (db === null || db === void 0 ? void 0 : db.collection(zoBaOrderCollection));
    const zoBaOrderResult = await (orderCollection === null || orderCollection === void 0 ? void 0 : orderCollection.insertOne(zoBaOrder));
    return zoBaOrderResult === null || zoBaOrderResult === void 0 ? void 0 : zoBaOrderResult.insertedId;
};
exports.createZoBaOrder = createZoBaOrder;
const countZopfOrders = async () => {
    var _a;
    const db = await (0, mongoDBClient_1.mongoDB)();
    const orderCollection = await (db === null || db === void 0 ? void 0 : db.collection(zoBaOrderCollection));
    const zoBaOrderResult = await (orderCollection === null || orderCollection === void 0 ? void 0 : orderCollection.aggregate([
        {
            $group: {
                _id: "$organisation",
                totalZopfe: {
                    $sum: {
                        $add: [
                            '$nrOf400gr', '$nrOf800gr'
                        ]
                    }
                },
            }
        }
    ]));
    const resultsByOrganisation = new Array();
    (_a = (await (zoBaOrderResult === null || zoBaOrderResult === void 0 ? void 0 : zoBaOrderResult.toArray()))) === null || _a === void 0 ? void 0 : _a.forEach((result) => resultsByOrganisation.push(new count_zopf_orders_model_1.CountZopfOrders(result)));
    return resultsByOrganisation;
};
exports.countZopfOrders = countZopfOrders;
