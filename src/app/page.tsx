"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [animation, setAnimation] = useState<boolean>(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <main className="w-full h-full flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full flex flex-col lg:flex-row gap-12">
        <div className="relative h-full">
          <div className="absolute w-full h-full lg:h-[calc(100%-32px)] -z-10 bg-text"></div>
          <Image
            width="800"
            height="400"
            alt="Team photo"
            priority
            className={`w-full shadow-image ${
              animation
                ? "lg:ml-8 lg:mt-8 p-4 lg:p-0 h-full lg:h-[calc(100%-32px)]"
                : "m-0"
            } transition-all duration-500`}
            src="/images/team-photo-2.jpeg"
          />
        </div>
        <div className="flex flex-col my-auto py-8 gap-4 px-4 justify-center items-start lg:items-end w-full lg:w-[45%] lg:text-right text-text">
          <h1 className="uppercase p-4 text-[40px] lg:text-[60px] font-bold bg-secondary/40">
            Labi Band
          </h1>
          <p className="p-4 bg-secondary/40">
            Orkester profesionale muzikore për Darsma dhe Ahengje familjare.
            <br />
            Na kontaktoni për rezervime në Kosovë, Maqedoni, Preshevë, Belgjikë,
            Gjermani apo Zvicërr.
          </p>
          <div className="w-full flex flex-row gap-4 mt-6 items-center justify-center">
            <Link
              href="/contact"
              className="border-2 border-text rounded-md px-4 py-2 hover:text-primary hover:bg-text transition-all duration-100"
            >
              Kontakto
            </Link>
            <Link
              href="/social-media"
              className="border-2 border-text rounded-md px-4 py-2 hover:text-primary hover:bg-text transition-all duration-100"
            >
              Rrjetet sociale
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
