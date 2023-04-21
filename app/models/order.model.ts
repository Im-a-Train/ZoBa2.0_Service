export enum Organisations {
    KUONOLF = "KUONOLF",
    CHUTZE = "CHUTZE",
    WORB = "WORB",
    HOCHWACHT = "HOCHWACHT"
}
export enum orderTime {
    EARLY,
    ANY,
    LATER
}
export class ZoBaOrder {

    constructor(data: any) {
        this.firstName = data['firstName']
        this.lastName = data['lastName']
        this.street = data['street']
        this.streetNr = data['streetNr']
        this.zip = data['zip']
        this.city = data['city']
        this.nrOf400gr = data['nrOf400gr']
        this.nrOf800gr = data['nrOf800gr']
        this.Time = data['Time']
        this.organisation = data['organisation']
        this.phone = data['phone']
        this.email = data['email']
        this.comment = data['comment']
        this.orderTime = data['orderTime']
    }

    readonly firstName: string
    readonly lastName: string
    readonly street: string
    readonly streetNr: string
    readonly zip: number
    readonly city: string
    readonly nrOf400gr: number
    readonly nrOf800gr: number
    readonly Time: orderTime
    readonly organisation: Organisations
    readonly phone: string
    readonly email?: string
    readonly comment?: string
    readonly orderTime: Date
}