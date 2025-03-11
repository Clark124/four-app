import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { Title, NavList } from '@/lib/constants'

export default function Footer() {
    return (
        <div className='border-t mt-6'>
            <div className='container py-32 flex justify-between'>
                <h2 className="text-2xl">
                    <Link href={"/"}>{Title}</Link>
                </h2>
                <div className="grid grid-cols-3 gap-10">
                    {NavList.map((item, index) => (
                        <div key={item.title} className="flex">
                            {index !== 0 && <Separator orientation="vertical" className="mr-10"/>}
                            <div >
                                <span>{item.title}</span>
                                <ul className='m-4 space-y-3'>
                                    {item.list.map(item => <li key={item}>
                                        {item}
                                    </li>)}
                                </ul>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
