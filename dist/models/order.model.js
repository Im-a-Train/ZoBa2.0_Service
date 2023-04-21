"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoBaOrder = exports.orderTime = exports.Organisations = void 0;
var Organisations;
(function (Organisations) {
    Organisations["KUONOLF"] = "KUONOLF";
    Organisations["CHUTZE"] = "CHUTZE";
    Organisations["WORB"] = "WORB";
    Organisations["HOCHWACHT"] = "HOCHWACHT";
})(Organisations = exports.Organisations || (exports.Organisations = {}));
var orderTime;
(function (orderTime) {
    orderTime[orderTime["EARLY"] = 0] = "EARLY";
    orderTime[orderTime["ANY"] = 1] = "ANY";
    orderTime[orderTime["LATER"] = 2] = "LATER";
})(orderTime = exports.orderTime || (exports.orderTime = {}));
class ZoBaOrder {
    constructor(data) {
        this.firstName = data['firstName'];
        this.lastName = data['lastName'];
        this.street = data['street'];
        this.streetNr = data['streetNr'];
        this.zip = data['zip'];
        this.city = data['city'];
        this.nrOf400gr = data['nrOf400gr'];
        this.nrOf800gr = data['nrOf800gr'];
        this.Time = data['Time'];
        this.organisation = data['organisation'];
        this.phone = data['phone'];
        this.email = data['email'];
        this.comment = data['comment'];
        this.orderTime = data['orderTime'];
    }
}
exports.ZoBaOrder = ZoBaOrder;
