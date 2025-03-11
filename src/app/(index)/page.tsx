import Product from "@/components/Product"
import Sort from "@/components/Sort"

import { productsAction } from "@/actions/product"

export default async function page() {
  const res = await productsAction()
  return (
    <div className="container flex py-6">
      <Sort/>
      <Product data={res.data}/>
    </div>
  )
}
