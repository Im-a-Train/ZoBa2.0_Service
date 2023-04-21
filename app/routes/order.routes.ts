import express from 'express';
var cors = require('cors')

import controller from '../controller/order.controller';
import { makeExpressCallback } from './make-callback';
import { checkSchema } from 'express-validator';
import { zoBaOrderValidationSchema } from '../models/validator';
const router = express.Router();

router.route('/zoBaOrder').post(cors(), checkSchema(zoBaOrderValidationSchema), makeExpressCallback(controller.postOrder));
router.route('/zoBaOrder').options(cors());

router.route('/zoBaOrder/count').get(cors(), makeExpressCallback(controller.countTotalZopfOrders))

export default router;