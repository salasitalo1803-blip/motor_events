import { Geist, Geist_Mono } from "next/font/google";
import styles from "./globals.css";
import Link from "next/link";
import FooterCTA from "@/components/footerCTA";
import HeaderCTA from "@/components/headerCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Motor Events",
  description: "O site Motor Events é a maior plataforma do mundo reunindo eventos de motociclismo, onde você pode encontrar informações sobre os melhores eventos de motociclismo, o Motor Events é a escolha ideal para quem busca se manter atualizado sobre o mundo do motociclismo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body>  

          <header className="header">

            <HeaderCTA></HeaderCTA>

          </header>

            {children}
        
          <footer>

            <FooterCTA></FooterCTA>

          </footer>
        
        </body> 
    </html>
  );
}
