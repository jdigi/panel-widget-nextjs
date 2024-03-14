import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import { ModalProvider } from "../hooks/useModal";
import GlobalModal from "../components/modal/globalmodal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const sourcesans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sourcesans3",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourcesans3.variable}`}>
      <body className={sourcesans3.className}>
        <ModalProvider>
          <GlobalModal />
          {children}
          <GlobalModal />
        </ModalProvider>
      </body>
    </html>
  );
}
