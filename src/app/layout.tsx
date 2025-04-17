import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../assets/globals.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "INcore",
  description: "Отелье кожанных изделий",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
