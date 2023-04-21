import { ObjectId } from "mongodb";
import { ZoBaOrder } from "../models/order.model";
import { mongoDB } from "./mongoDBClient";
import { CountZopfOrders } from "../models/count.zopf.orders.model";

const zoBaOrderCollection = 'zobBaOrders'

export const createZoBaOrder = async (zoBaOrder: ZoBaOrder): Promise<ObjectId | undefined> => {
    const db = await mongoDB();
    const orderCollection = await db?.collection(zoBaOrderCollection);

    const zoBaOrderResult = await orderCollection?.insertOne(zoBaOrder);
    return zoBaOrderResult?.insertedId
}

export const countZopfOrders = async (): Promise<CountZopfOrders[]> => {
    const db = await mongoDB();
    const orderCollection = await db?.collection(zoBaOrderCollection);
    const zoBaOrderResult = await orderCollection?.aggregate([
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
        }])
    const resultsByOrganisation: CountZopfOrders[] = new Array();
    (await zoBaOrderResult?.toArray())?.forEach((result: any) => resultsByOrganisation.push(new CountZopfOrders(result)))
    return resultsByOrganisation;
}