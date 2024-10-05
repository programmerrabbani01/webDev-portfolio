import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav.tsx";
import Footer from "@/components/Home/Footer/Footer.tsx";
import ScrollToTop from "@/components/Helper/ScrollToTop.tsx";
import AnimatedCursor from "react-animated-cursor";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web-Dev",
  description: "Web-Dev Portfolio With Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom_scrollBar">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={sora.className}
      >
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid #ffffff",
            }}
          />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
