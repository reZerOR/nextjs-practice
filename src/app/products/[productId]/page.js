export default function ProductId({params}) {
  return (
<div className='flex min-h-screen items-center text-7xl font-bold justify-center'>
  <h1>Product {params.productId} Details page</h1>
</div>
  )
}