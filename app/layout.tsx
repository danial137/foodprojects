import type { Metadata } from "next";
import {Manrope} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";
const font = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Food landing page",
  description: "A landing page for a food-related website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}>
        <Provider>
        <ResponsiveNav/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
