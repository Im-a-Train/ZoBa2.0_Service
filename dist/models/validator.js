"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoBaOrderValidationSchema = void 0;
// https://github.com/validatorjs/validator.js#validators
exports.zoBaOrderValidationSchema = {
    firstName: {
        in: ['body'],
        isLength: {
            errorMessage: 'Vorname sollte nicht länger sein als 30 Zeichen',
            options: { max: 30 },
        },
    },
    lastName: {
        in: ['body'],
        isLength: {
            errorMessage: 'Nachname sollte nicht länger sein als 30 Zeichen',
            options: { max: 30 },
        },
    },
    street: {
        in: ['body'],
        isLength: {
            errorMessage: 'Strasse sollte nicht länger sein als 30 Zeichen',
            options: { max: 30 },
        },
    },
    streetNr: {
        in: ['body'],
        isLength: {
            errorMessage: 'Strassennummer sollte nicht länger sein als 30 Zeichen',
            options: { max: 30 },
        },
    },
    zip: {
        in: ['body'],
        isPostalCode: {
            errorMessage: 'Die Postleitzahl sollte vier Zeichen lang sein',
            options: 'CH',
        },
    },
    city: {
        in: ['body'],
        isLength: {
            errorMessage: 'Strassennummer sollte nicht länger sein als 30 Zeichen',
            options: { max: 30 },
        },
    },
    nrOf400gr: {
        in: ['body'],
        isInt: {
            errorMessage: 'Keine Zahl',
        },
        isLength: {
            errorMessage: 'Die Anzahl Zöpfe sollte zwischen 0 und 10 liegen',
            options: { min: 0, max: 10 },
        },
        // Sanitizers can go here as well
        toInt: true,
    },
    nrOf800gr: {
        in: ['body'],
        isInt: {
            errorMessage: 'Keine Zahl',
        },
        isLength: {
            errorMessage: 'Die Anzahl Zöpfe sollte zwischen 0 und 10 liegen',
            options: { min: 0, max: 10 },
        },
        // Sanitizers can go here as well
        toInt: true,
    },
    orderTime: {
        in: ['body'],
        isIn: {
            errorMessage: 'Falsch gewählte Lieferzeit',
            options: [['EARLY', 'ANY', 'LATER']]
        }
    },
    organisation: {
        in: ['body'],
        isIn: {
            errorMessage: 'Falschgewählte Organisation',
            options: [['KUONOLF', 'CHUTZE', 'WORB', 'HOCHWACHT']]
        }
    },
    phone: {
        in: ['body'],
        isMobilePhone: {
            errorMessage: 'Bitte valide Telefonnummer eingeben z.B. +41791231212',
            options: ["any"]
        }
    },
    email: {
        in: ['body'],
        isEmail: true,
        optional: true
    },
    comment: {
        in: ['body'],
        isLength: {
            errorMessage: 'Kommentar sollte nicht länger sein als 500 Zeichen',
            options: { max: 500 },
        },
        optional: true
    }
};
