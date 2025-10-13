import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { FooterWrapper } from "@/common/Footer/FooterWrapper";
import QueryProvider from "@/provider/QueryProvider";
import { HeaderWrapper } from "@/common/Header/HeaderWrapper";
import { StoreProvider } from "@/provider/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShinR",
  description: "Your Vehicle Deserves Better ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <QueryProvider>
          <StoreProvider>
            <div className="min-h-screen w-full flex flex-col">
              <HeaderWrapper />
              <main className="flex-1">{children}</main>
              <FooterWrapper />
            </div>
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
