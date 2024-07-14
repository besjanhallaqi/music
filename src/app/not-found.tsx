import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-text">
        <p className="text-[80px] font-semibold">404</p>
        <p className="text-xl">Faqen e kërkuar nuk e gjetëm</p>
        <Link className="text-xl hover:underline" href="/">
          Kthehu në faqen kryesore
        </Link>
      </div>
    </div>
  );
}
