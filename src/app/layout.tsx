import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "SynerMuscle",
  description: "Premium, motion-driven fitness app. Join early access.",
  metadataBase: new URL("https://synermuscle.app"),
  verification: {
    google: "C26QgfDqBnp0adfqlFbaLeHEjToOwuXEFcPhxDK3u6c",
  },
  openGraph: {
    title: "SynerMuscle – Early Access",
    description: "Premium, motion-driven fitness app. Join early access.",
    url: "https://synermuscle.app",
    siteName: "SynerMuscle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SynerMuscle – Early Access",
    description: "Premium, motion-driven fitness app. Join early access.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background text-foreground`}
      >
        <div className="relative min-h-screen overflow-x-clip">
          {/* Mobile-visible but lighter overlay */}
          <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60 sm:opacity-100" />
          {children}
        </div>
      </body>
    </html>
  );
}
