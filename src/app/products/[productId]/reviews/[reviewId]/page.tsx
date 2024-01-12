export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
      <h1>
        Review {params.reviewId} Product {params.productId} page
      </h1>
    </div>
  );
}
