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
  title: "ShinR App",
  description:
    "One-stop car care platform. Book car washes, mechanics, tyre shops, detailing & ceramic coating services near you. Easy booking, trusted vendors.",

  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ShinR App",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
            </div>
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
