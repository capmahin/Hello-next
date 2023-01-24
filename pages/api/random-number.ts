import { NextApiRequest, NextApiResponse } from "next";


export default function (req: NextApiRequest, res: NextApiResponse) {

    res.setHeader('Set-Cookie', 'areyouprogrammer=true')

    res.json({ num: Math.floor(Math.random() * 10) })
}