'use client'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SortValue } from '@/types/global'
import { SortTitle,SortList } from "@/lib/constants"
import { useSortStore } from "@/store"

export default function Sort() {
    const {setValue} = useSortStore()
    const handleValueChange = (value: SortValue) => {
        setValue(value)
    }
    return (
        <div className="w-64 py-4">
            <p className="m-5 text-xl">{SortTitle}</p>
            <ToggleGroup type="single" defaultValue="latest" className="flex-col gap-3"
                onValueChange={handleValueChange}>
                {SortList.map(item=> 
                <ToggleGroupItem key={item.value} value={item.value}>{item.text}</ToggleGroupItem>)}
             
            </ToggleGroup>

        </div>
    )
}
