'use server'

import db from "@/lib/db"
import { Address } from "@/types/global"
import { revalidatePath } from "next/cache"

export async function addAddressAction(name: string, city:string,address:string,phone:string,userid:number) {
    await db("insert into addresses(name,city,address,phone,userid) values ($1,$2,$3,$4,$5)",[
        name,city,address,phone,userid
    ])
    revalidatePath('/account')
    return {
        status:200,
        body:"add address success"
    }
}

export async function addressesAction(userid:number){
    const result = await db("select * from addresses where userid=$1",[userid]) as Address[]
    return {
        status:200,
        body:"addresses success",
        data:result
    }
}

export async function removeAddressAction(id:number){
    await db("delete from addresses where id=$1",[id])
    revalidatePath('/account')
    return {
        status:200,
        body:"remove addresses success",
       
    }
}
    
