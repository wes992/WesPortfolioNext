import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { getCities } from "../lib/firebase/cities";

//👇 Configure our font object
const notoSanse = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wes Hampton",
  description: "Wes Hampton",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const results = await getCities();
  console.log(results);
  return (
    <html lang="en">
      <body className={notoSanse.className}>{children}</body>
    </html>
  );
}
