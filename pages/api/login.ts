import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'asdsadasdsadasdasdas'

export default function (req: NextApiRequest, res: NextApiResponse) {

    // res.setHeader('Set-Cookie', 'areyouprogrammer=true;')

    // res.statusCode = 200

    // res.end('Hello! How are you')

    if (!req.body) {
        res.statusCode = 404
        res.end('error')
        return
    }

    const { username, password } = req.body
    res.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY)
    })
}