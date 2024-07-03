import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./contexts/AuthContext";
const poppins = Poppins({ weight: '500', style: "normal", subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Alametric Learning Center",
  description: "A learning center for all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster />
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>

      </body>
    </html>
  );
}
