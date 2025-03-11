import { create } from 'zustand'

import { SortValue } from '@/types/global'

type SortState = {
    value: SortValue,
    setValue: (value: SortValue) => void
}

const useSortStore = create<SortState>((set) => ({
    value: "latest",
    setValue: (value) => set({ value })
}))

export default useSortStore

// const useStore = create(set => ({
//     count: 0,
//     setCount: (num: number) => set({ count: num }),
//     inc: () => set((state) => ({ count: state.count + 1 })),
//   }));
//   ​