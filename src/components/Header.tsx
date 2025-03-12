'use client'

import Link from 'next/link'
import React from 'react'
import { Separator } from "@/components/ui/separator"

import { Title, MenuList } from '@/lib/constants'
import { useCartStore } from '@/store'

export default function Header() {
    const {cartList} = useCartStore()
    return (
        <div className='h-16 px-10 border-b bg-white'>
            <div className='container flex items-center justify-between h-full'>
                <h1 className='text-2xl'>
                    <Link href={'/'}>{Title}</Link>
                </h1>
                <div className="flex justify-end space-x-4 text-sm h-1/3">
                    {MenuList.map((item, i) => <div key={item.text} className='flex'>
                        {i!==0&& <Separator orientation="vertical" className="mr-3"/>}
                        <Link href={item.href} key={item.text}>{item.text}</Link>
                    </div>)}
                    {cartList.length?'（'+cartList.length+'）':""} 
                </div>

            </div>
        </div>
    )
}
