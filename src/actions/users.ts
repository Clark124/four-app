'use server'

import db from "@/lib/db"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { cookies } from "next/headers"

const SECRET_KEY = 'CLARK-SECRET-KEY'

export async function loginAction(email: string, password: string) {
    const result = await db("select * from users where email =$1 and password=$2", [email, password])
    const cookie = await cookies()
    if (result.length === 0) {
        return {
            status: 401,
            body: 'login failed'
        }
    } else {
        const token = jwt.sign({ email, name: result[0].name, userId: result[0].id }, SECRET_KEY, {
            expiresIn: "1h"
        })
        cookie.set({
            name: "token",
            value: token,
            path: "/",
            maxAge: 60 * 60 * 24 * 30  //30days
        })
        return {
            status: 200,
            body: 'login success'
        }
    }
}

export async function logoutAction(){
    const cookie = await cookies()
    cookie.delete('token')
    return {
        status:200,
        body:"logout success"
    }
}

export async function registerAction(email: string, password: string, name: string) {
    const result = await db("select * from users where email = $1", [email])
    if (result.length > 0) {
        return {
            status: 401,
            body: 'register fail'
        }
    } else {
        await db("insert into users (email,name,password) values ($1,$2,$3)", [email, name, password])
        return {
            status: 200,
            body: "register success"
        }
    }
}

export async function authAction() {
    const cookie = await cookies()
    const token = cookie.get("token")
    try {
        if (!token) {
            return {
                status: 401,
                body: "auth fail"
            }
        } else {
            const result = jwt.verify(token.value, SECRET_KEY) as JwtPayload
            return {
                status: 200,
                body: "auth success",
                data: result
            }
        }
    } catch (error) {
        return {
            status: 401,
            body: "auth fail" + error
        }
    }
}