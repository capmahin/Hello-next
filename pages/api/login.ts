import { NextApiRequest, NextApiResponse } from "next";


export default function (req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body)
    // res.setHeader('Set-Cookie', 'areyouprogrammer=true;')

    // res.statusCode = 200

    // res.end('Hello! How are you')
    res.json({ num: Math.floor(Math.random() * 10) })
}