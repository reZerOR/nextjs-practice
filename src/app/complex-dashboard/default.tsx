import Link from "next/link";

export default function DefaultCpomplexDashboard() {
  return (
    <div className="flex items-center">
      <h1>Dashboard</h1>
      <Link href={"/"}>
        <button className="bg-zinc-800 text-white ml-3  py-2 px-5 rounded-lg">
          Home
        </button>
      </Link>
    </div>
  );
}
