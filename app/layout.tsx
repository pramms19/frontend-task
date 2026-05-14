import "./globals.css";
import { Poppins, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        poppins.className,
        "font-sans scroll-smooth",
        geist.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
