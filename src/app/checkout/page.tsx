import { authAction } from '@/actions/users'
import Checkout from '@/components/Checkout'
import { redirect } from 'next/navigation'
import React from 'react'
import { addressesAction } from '@/actions/address'

export default async function page() {
    const auth = await authAction()
    const addresses = await addressesAction(auth.data?.userId)
    if (auth.status !== 200) {
        redirect("/account")
    }
    return (
        <div className='container2' >
            <Checkout addressesData={addresses.data}/>
        </div>
    )
}
