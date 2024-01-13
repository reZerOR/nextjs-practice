"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex justify-center gap-3">
        {navlinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name}>
              <button
                className={`text-base py-3 mt-4 px-8 ${
                  isActive ? "bg-yellow-200" : "bg-amber-500"
                }  rounded-lg`}
              >
                {link.name}
              </button>
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
