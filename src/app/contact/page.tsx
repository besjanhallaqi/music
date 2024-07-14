import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="min-w-[300px] flex flex-col gap-4 text-text">
        <p className="text-3xl text-center mb-4">Kontakti</p>
        <Link
          href="tel:+32467603440"
          className="flex flex-row justify-center gap-2 py-4 hover:bg-secondary"
        >
          <Image
            width="28"
            height="28"
            src="/icons/phone.svg"
            alt="Phone icon"
          />
          <p className="text-xl">+32467603440</p>
        </Link>
        <div className="flex flex-row divide-x-2 divide-divider">
          <Link
            href="https://wa.me/32467603440"
            target="_blank"
            className="w-1/2 py-4 flex justify-center hover:bg-secondary"
          >
            <Image
              width="36"
              height="36"
              className="w-10"
              src="/icons/whatsapp.svg"
              alt="WhatsApp icon"
            />
          </Link>
          <Link
            href="viber://contact?number=%2B32467603440"
            className="w-1/2 py-4 flex justify-center hover:bg-secondary"
          >
            <Image
              width="36"
              height="36"
              className="w-10"
              src="/icons/viber.svg"
              alt="Viber icon"
            />
          </Link>
        </div>
        <hr className="my-4 border-divider border-[1px]" />
        <Link
          href="tel:+491772737076"
          className="flex flex-row justify-center gap-2 py-4 hover:bg-secondary"
        >
          <Image
            width="28"
            height="28"
            src="/icons/phone.svg"
            alt="Phone icon"
          />
          <p className="text-xl">+491772737076</p>
        </Link>
        <div className="flex flex-row divide-x-2 divide-divider">
          <Link
            href="https://wa.me/491772737076"
            target="_blank"
            className="w-1/2 py-4 flex justify-center hover:bg-secondary"
          >
            <Image
              width="36"
              height="36"
              className="w-10"
              src="/icons/whatsapp.svg"
              alt="WhatsApp icon"
            />
          </Link>
          <Link
            href="viber://contact?number=%2B491772737076"
            className="w-1/2 py-4 flex justify-center hover:bg-secondary"
          >
            <Image
              width="36"
              height="36"
              className="w-10"
              src="/icons/viber.svg"
              alt="Viber icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
