import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "Seu CV Fácil",
  description: "Seja notado, crie seu currículo em minutos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(fontTitle.variable, fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
