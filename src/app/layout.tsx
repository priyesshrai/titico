import type { Metadata } from "next";
import { Poppins, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import SmoothScrollProvider from "../lib/smooth_scroll";
import Footer from "../components/footer";
import BG from "../components/ui/bg";

const montserrat = Montserrat_Alternates({
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "500", "600", "700", "800"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Titico Textiles",
  description: "Titico Textiles is one of the largest exporter of silk fabric in varanasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
          <BG />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
