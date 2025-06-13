import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/shared/Footer";
import { ModalProvider } from "@/providers/modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sesforce",
  description: "Seu sistemas de gerenciamento de chamados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sky-950 bg-sky-100`}
      >
        <AuthProvider>
          <ModalProvider>
            <Header />
             {children}
            <Footer />
          </ModalProvider>
        </AuthProvider>
         
      </body>
    </html>
  );
}
