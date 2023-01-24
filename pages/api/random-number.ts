import { NextApiRequest, NextApiResponse } from "next";


export default function (req: NextApiRequest, res: NextApiResponse) {
    //it should NOT be a react component


    res.json({ num: Math.floor(Math.random() * 10) })
}