"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const pages = [
    { link: "/", label: "Faqja kryesore" },
    { link: "/contact", label: "Kontakti" },
    { link: "/social-media", label: "Rrjetet sociale" },
    { link: "/about-us", label: "Rreth nesh" },
  ];
  return (
    <div className="w-full h-32 flex flex-row justify-between items-center">
      <Link href="/">
        <Image
          width="200"
          height="120"
          className="h-full fill-text"
          src="/icons/logo.svg"
          alt="Labi band logo"
          priority
        />
      </Link>
      <button onClick={handleMenu}>
        <Image
          width="40"
          height="40"
          className="h-full"
          src="/icons/burger-menu.svg"
          alt="Menu button"
        />
      </button>
      <div
        className={`fixed flex flex-col divide-y-2 divide-divider px-8 z-50 w-full lg:w-1/2 h-screen bg-secondary top-0 transition-all duration-500 ${
          menu ? "right-0" : "-right-full"
        }`}
      >
        <div className="w-full h-32 flex flex-row justify-between items-center">
          <Image
            width="200"
            height="120"
            className="lg:hidden h-full fill-text"
            src="/icons/logo.svg"
            alt="Labi band logo"
            priority
          />
          <button onClick={handleMenu} className="ml-auto">
            <Image
              width="40"
              height="40"
              className="h-full"
              src="/icons/burger-menu.svg"
              alt="Menu button"
            />
          </button>
        </div>
        <div className="w-full h-auto flex flex-col py-4 gap-4">
          {pages.map((page) => (
            <Link
              key={page.link}
              href={page.link}
              className={`w-full text-right px-4 py-8 text-xl text-text transition-all duration-100 ${
                pathname === page.link
                  ? "border-r-4 border-text bg-primary/40"
                  : "border-r-2 border-divider hover:border-text hover:bg-primary/25"
              }`}
              onClick={handleMenu}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
