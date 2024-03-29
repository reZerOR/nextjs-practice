import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <h1>Just a Notification</h1>
      <Link href={"/complex-dashboard/allnotification"}>
        <button className="bg-zinc-800 text-white ml-3  py-2 px-5 rounded-lg">
          All Notification {">"}
        </button>
      </Link>
    </Card>
  );
}
