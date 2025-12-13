import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { 
  title: "ProteoAging-Oocytes", 
  description: "Bio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Main Content */}
        <main className="min-h-screen">{children}</main>
        <ToastContainer position="bottom-right" autoClose={3000} newestOnTop />
      </body>
    </html>
  );
}
