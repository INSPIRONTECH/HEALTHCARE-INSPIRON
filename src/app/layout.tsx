import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEALTHCARE INSPIRON — Laboratory Information System",
  description: "Your lab. Your doctors. Your data. The only LIS tailored for Bangladesh with fully automated doctor commissions, offline-first syncing, and DGHS/FHIR compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col font-neo bg-hi-teal-deep text-hi-text">
        {children}
      </body>
    </html>
  );
}
