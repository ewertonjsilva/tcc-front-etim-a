import { Geist } from "next/font/google"; 

import Header from "@/componentes/cabecalho";
import Footer from "@/componentes/rodape";

import "./reset.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "BomBurguer",
  description: "Lanches e petiscos de qualidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

