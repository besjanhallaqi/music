import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-[900px] h-[600px] flex justify-start border-4 border-text">
        <div className="w-1/2 relative h-full">
          <Image
            className="w-auto h-full -ml-8"
            alt="Labi logo"
            src="/images/labinot-ademi.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="absolute bottom-28 left-28 flex flex-col justify-center items-center ml-8 text-text">
          <p className="text-4xl font-bold">Labinot Ademi</p>
          <p className="text-3xl">Live 2025</p>
        </div>
        <div className="my-8 h-10/12 border-l border-text"></div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center text-2xl text-text pb-24">
          {[
            "1. Gurbeti",
            "2. Të kam thanë e dashur",
            "3. Moj sy zeza",
            "4. Bolla lara lara",
            "5. O syn oj zi",
            "6. Arabica - Zemrën kallma",
            "7. Ma lun syrin njana",
            "8. Era po fryn",
            "9. Ku je kan",
          ].map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="absolute bottom-6 left-1/2 ml-6 text-text">
          <p>
            Aranzher Sint: Arian Rushiti
            <br />
            Sax Klarinet: Zeqirja Hallaqi
            <br />
            Mysafir Special: Elmar Berisha
            <br />
            Studio AB-Record (Astrit Bela)
            <br />
            Për rezervime kontaktoni në
            <br /> Whatsapp +32497198909
          </p>
        </div>
      </div>
    </div>
  );
}
