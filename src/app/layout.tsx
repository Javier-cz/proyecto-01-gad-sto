import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi Proyecto",
  description: "Proyecto con menú desplegable y estilos globales",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-white text-gray-900">
        <Header />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
