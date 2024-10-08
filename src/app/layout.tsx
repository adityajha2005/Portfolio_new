import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning>
    
       <body>
      
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
             <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />

        </body>
    </html>
  );
}
