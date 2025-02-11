import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RCN MEDIA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
       <body className={inter.className}>{children}</body>
    </html>
  );
}
