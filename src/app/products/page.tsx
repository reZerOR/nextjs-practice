import Link from "next/link";

export default function Products() {
  const links = [1, 2, 3];
  return (
    <div className="flex flex-col gap-6 min-h-screen items-center text-7xl font-bold justify-center">
      <h1>Products page</h1>
      {links.map((item, index) => (
        <Link key={index} href={`/products/${item}`}>
          <button className="text-base py-3 mt-4 px-8 bg-amber-500 rounded-lg">
            Product {item}
          </button>
        </Link>
      ))}
    </div>
  );
}
