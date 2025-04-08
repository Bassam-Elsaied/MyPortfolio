import { Sora } from "next/font/google";
import "./globals.css";
import TopLeftImage from "@/components/TopLeftImage";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Bassam Portfolio",
  description: "Who am i and what i'm doing ?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable}  antialiased page bg-site text-white bg-no-repeat bg-cover relative font-sora`}
      >
        <TopLeftImage />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
