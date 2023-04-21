export class CountZopfOrders {
    _id: string
    totalZopfe: number

    constructor(document: any) {
        this._id = document['_id']
        this.totalZopfe = document['totalZopfe'];
    }
}