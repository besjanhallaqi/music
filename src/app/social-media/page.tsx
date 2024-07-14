import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 my-8">
      <div className="min-w-[300px] flex flex-col text-text border-2 p-4 ">
        <Image
          width="300"
          height="300"
          className="aspect-square mb-4"
          src="/images/labinot-ademi.jpeg"
          alt="Labinot Ademi"
          priority
        />
        <Link
          href="https://www.tiktok.com/@labinotademiofficial?_t=8o1NfgMPJa5&_r=1"
          target="_blank"
          className="flex flex-row gap-2 items-center hover:bg-secondary px-2 py-4"
        >
          <Image
            width="32"
            height="32"
            className="border-2 border-text rounded-lg"
            src="/icons/tiktok.svg"
            alt="TikTok icon"
          />
          <p className="text-xl">TikTok</p>
        </Link>
        <Link
          target="_blank"
          href="https://wa.me/491772737076"
          className="flex flex-row gap-2 items-center hover:bg-secondary px-2 py-4"
        >
          <Image
            width="32"
            height="32"
            src="/icons/instagram.svg"
            alt="Instagram icon"
          />
          <p className="text-xl">Instagram</p>
        </Link>
        <Link
          target="_blank"
          href="https://www.facebook.com/labinot.ademi.372"
          className="flex flex-row gap-2 items-center hover:bg-secondary px-2 py-4"
        >
          <Image
            width="32"
            height="32"
            src="/icons/facebook.svg"
            alt="Facebook icon"
          />
          <p className="text-xl">Facebook</p>
        </Link>
      </div>
    </div>
  );
}
