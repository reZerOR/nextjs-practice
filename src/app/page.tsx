import SvgColorChange from "@/components/SvgColorChange";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center text-7xl font-bold justify-center">
      <h1>Home page</h1>
      <SvgColorChange></SvgColorChange>
      <div className="space-x-3">
        <Link href={"/blog"}>
          <button className="text-base py-3 mt-4 px-8 bg-amber-500 rounded-lg">
            Blog
          </button>
        </Link>
        <Link href={"/products"}>
          <button className="text-base py-3 mt-4 px-8 bg-amber-500 rounded-lg">
            products
          </button>
        </Link>
        <Link href={"/order-product"}>
          <button className="text-base  py-3 mt-4 px-8 bg-amber-500 rounded-lg">
            place order
          </button>
        </Link>
        <Link href={"/complex-dashboard"}>
          <button className="text-base  py-3 mt-4 px-8 bg-amber-500 rounded-lg">
            dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
