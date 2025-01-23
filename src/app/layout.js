import { Nunito_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "",
  description: "",
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-XXK1302NWJ" />
    </html>
  );
};