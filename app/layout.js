import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taaruvya - Panda Scoop",
  description: "Award-winning premium desserts and ice cream. It's Bamboolicious!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
  <link rel="icon" href="https://taaruvya.in/favicon.png" />
  <link rel="apple-touch-icon" href="https://taaruvya.in/favicon.png" />
  <meta property="og:image" content="https://taaruvya.in/favicon.png" />
  <meta name="twitter:image" content="https://taaruvya.in/favicon.png" />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}