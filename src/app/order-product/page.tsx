"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div className="flex min-h-screen items-center text-7xl font-bold justify-center">
      <button
        onClick={handleClick}
        className="py-3 px-8 bg-pink-400 rounded-lg"
      >
        order and go home
      </button>
    </div>
  );
}
