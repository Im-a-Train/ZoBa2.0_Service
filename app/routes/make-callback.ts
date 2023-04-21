import { Request, Response } from "express";
import { sanitize, sanitizeBody } from "express-validator";

export const makeExpressCallback = (controller: any) => (req: Request, res: Response) => {
    
    const httpRequest = {
        body: req.body,
        query:  req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        source: {
            ip: req.ip,
            browser: req.get('User-Agent')
        },
        headers: {
            'Content-Type': req.get('Content-Type'),
            Referer: req.get('referer'),
            'User-Agent': req.get('User-Agent')
        }
    };
    res.set('Access-Control-Allow-Origin', '*')
    controller(httpRequest)
        .then((httpResponse: any) => {
            res.set('Content-Type', 'application/json');
            res.type('json');
            const body = {
                success: true,
                code: 200,
                data: httpResponse
            };
            res.status(200).send(body);
        })
        .catch((e: any) => {

            res.status(400).send({
                success: false,
                code: 400,
                error: {
                    description: e.message
                }
            });
        });
}