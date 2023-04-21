import { validationResult } from "express-validator";
import { ZoBaOrder } from "../../models/order.model";
import { Request, Response } from "express";
import { countZopfOrders, createZoBaOrder } from "../../data-access/orders.db";
import { CountZopfOrders } from "../../models/count.zopf.orders.model";

export const postOrder = async (req: Request, res: Response): Promise<any> => {
    const isChaptchaValid = await checkCaptcha(req.body.captcha)
    if (!isChaptchaValid) return { errors: 'Captcha ist falsch, bist du ein Roboter?' };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return { errors: errors.array() };
    }
    req.body.orderTime = new Date();
    const newOrder = new ZoBaOrder(req.body)
    return createZoBaOrder(newOrder).then(orderId => {
        return orderId;
    }).catch(e => {
        return e;
    });
}

export const getTotalZopfOrders = async (req: Request, res: Response): Promise<any> => {
    const selectedOrganisation: string = req.query.organisation?.toString() || "";
    return countZopfOrders().then((ordersByOrganisation: CountZopfOrders[]) => {
        if (selectedOrganisation === "") {
            return ordersByOrganisation.reduce((sum, current) => sum += current.totalZopfe, 0)
        } else {
            return ordersByOrganisation.filter(order => order._id.toLocaleLowerCase() === selectedOrganisation.toLocaleLowerCase()).reduce((sum, current) => sum += current.totalZopfe, 0)
        }
    }).catch(e => {
        return e;
    });
}

const checkCaptcha = async (captcha: string): Promise<boolean> => {
    const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
            'Accept': 'application/JSON',
            "Content-Type": "application/x-www-form-urlencoded",
        },
        mode: 'no-cors',
        body: `secret=6LekOEElAAAAALnulk20zm4deUdPI0FjkerSscGZ&response=${captcha}`
    })

    return await resp.json().then(body => {
        return body?.success || false
    });
}
