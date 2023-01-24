import { NextApiRequest, NextApiResponse } from "next";


export default function (req: NextApiRequest, res: NextApiResponse) {
    console.log('REQUEST BODY', req.body)


    res.json({ num: Math.floor(Math.random() * 10) })
}