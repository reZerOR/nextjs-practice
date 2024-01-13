import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductId({ params }: Props) {
  return (
    <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
      <h1>Product {params.productId} Details page</h1>
    </div>
  );
}
