import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center text-7xl font-bold justify-center">
      <h1>Home page</h1>
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
      </div>
    </div>
  );
}
