import NotAccount from '@/components/NotAccount'
import Account from '@/components/Account'
import React from 'react'
import { authAction } from '@/actions/users'
import { addressesAction } from '@/actions/address'



export default async function page() {
    const auth = await authAction()
    const addesses = await addressesAction(auth.data?.userId)
    return (
        <>
            {auth.status === 200 && auth.data ? <Account authData={auth.data} addressesData={addesses.data}/> : <NotAccount />}
        </>

    )
}
