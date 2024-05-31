import type { Metadata } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const karla = Karla({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Simeon Ilic | Software  engineer",
  description: "Explore the portfolio of a versatile software engineer proficient in both front-end and back-end development. Specializing in React, Angular, and Next.js for front-end, and .NET, Flask, and Spring Boot for back-end solutions. Discover projects and innovations in full-stack development.",
  keywords: "software engineer, front-end developer, back-end developer, full-stack developer, React, Angular, Next.js, .NET, Flask, Spring Boot, web development, portfolio, coding, programming, technology, projects"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
