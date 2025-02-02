import type { Metadata } from "next";
import { Inter, Convergence, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });
const convergence = Convergence({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-convergence",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
    
       <body className={`${convergence.variable} ${poppins.variable} font-poppins`}>
      
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
