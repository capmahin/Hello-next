import { NextApiRequest, NextApiResponse } from "next";


export default function (req: NextApiRequest, res: NextApiResponse) {
    console.log('REQUEST BODY', req.query)


    res.json({ num: Math.floor(Math.random() * 10) })
}