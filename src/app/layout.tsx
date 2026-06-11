import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEALTHCARE INSPIRON — Bangladesh's Connected Laboratory Information System",
  description: "The only Laboratory Information System built to connect your lab to Bangladesh's national health record. Live now. Mindray analyzer integration, bilingual reports, DGHS SHR ready. Book a free demo.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
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
