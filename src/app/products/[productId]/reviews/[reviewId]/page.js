export default function Home({params}) {
  return (
<div className='flex min-h-screen items-center text-7xl font-bold justify-center'>
  <h1>Review {params.reviewId} Product {params.productId} page</h1>
</div>
  )
}