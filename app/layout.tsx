import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { constructMetadata } from "@/lib/metadata";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="br" suppressHydrationWarning>
        

        <body className={inter.className}>
          <Analytics />
          <ToasterProvider />

          <ModalProvider />

          {children} 
        </body>
      </html>
    </ClerkProvider>
  );
}
