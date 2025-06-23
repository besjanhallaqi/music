import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Orkestra - LABI BAND",
  description:
    "Orkester profesionale muzikore për Darsma dhe Ahengje familjare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto px-4 w-full min-h-screen flex flex-col overflow-x-hidden bg-primary ${poppins.className}`}
      >
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center">
          {children}
        </div>
        <div className="text-text text-center px-6 py-4">
          <p>
            &copy;&nbsp;2024&nbsp;
            <a
              className="font-semibold"
              href="https://besjanhallaqi.com/"
              target="_blank"
            >
              BH
            </a>
            . All rights reserved.
          </p>
        </div>
      </body>
    </html>
  );
}
