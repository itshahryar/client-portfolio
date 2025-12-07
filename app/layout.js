import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Heart } from "lucide-react";
import { Suspense } from "react";
import NavigationLoader from "@/components/navigation-loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { title: "ProteoAging-Oocytes", description: "Bio",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Navigation Loader */}
            <Suspense fallback={null}>
              <NavigationLoader />
            </Suspense>

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="min-h-screen">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-300">
                <p className="text-lg font-semibold">ProteoAging-Oocytes</p>

                <p className="mt-2 text-sm">
                  Advancing research on proteomics, aging, and oocyte biology through intelligent data analysis.
                </p>

                <div className="mt-4 flex flex-col items-center space-y-2">
                  {/* <p className="flex items-center text-xs text-gray-500">
                    Made with love by Hamna <Heart className="ml-1 h-3 w-3 text-red-500 fill-current" />
                  </p> */}
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
