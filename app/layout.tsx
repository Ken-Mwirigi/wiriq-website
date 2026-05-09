import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// @ts-ignore
import "./globals.css";
// @ts-ignore
import "aos/dist/aos.css";

const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WiriqTech | Digital Solutions",
  description: "Bridging the gap between software and hardware. High-quality web development, custom software, and technical infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProviderWrapper>
          {/* Navigation Bar */}
          <ResponsiveNav />

          {/* Main Content Area */}
          <main>
            {children}
          </main>

          {/* Persistent Footer */}
          <Footer />

          {/* Functional Floating Widgets */}
          <ScrollToTop />
          <WhatsAppFloat />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}