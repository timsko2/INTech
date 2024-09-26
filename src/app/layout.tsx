import type { Metadata } from "next";
import localFont from "next/font/local"; 
import { Roboto } from '@next/font/google'; 
import "./styles/reset.css";
import "./globals.css";
import "./styles/globals.scss";
import "./components/Header.module.scss";

// Déclaration de la police Roboto
const roboto = Roboto({
  subsets: ['latin'], // Choisir le sous-ensemble
  weight: ['400', '700'], // Définir les poids que vous souhaitez utiliser
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Métadonnées de la page
export const metadata: Metadata = {
  title: "INTech",
  description: "Site web de l'association INTech",
};

// Composant de mise en page racine
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto.className} antialiased`} // Utilisation de Roboto ici
      >
        {children}
      </body>
    </html>
  );
}
