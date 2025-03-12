import { authAction } from '@/actions/users'
import Cart from '@/components/Cart'
import React from 'react'

export default async function page() { 
  const auth = await authAction()
  return (
    <Cart status={auth.status} />
  )
}
