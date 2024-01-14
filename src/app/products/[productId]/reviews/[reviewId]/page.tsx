import { notFound } from "next/navigation";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(100);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
      <h1>
        Review {params.reviewId} Product {params.productId} page
      </h1>
    </div>
  );
}
