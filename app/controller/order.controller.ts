import { Request, Response } from 'express';
import { getTotalZopfOrders, postOrder } from '../use-cases/order/post-order';

export default Object.freeze({
    countTotalZopfOrders: (req: Request, res: Response) => getTotalZopfOrders(req, res),

    postOrder: (req: Request, res: Response) => postOrder(req, res),

    // ...

});