import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <h1>All Notification</h1>
      <Link href={"/complex-dashboard"}>
        <button className="bg-zinc-800 text-white ml-3  py-2 px-5 rounded-lg">
          {"<"} A Notification
        </button>
      </Link>
    </Card>
  );
}
