import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const roboto = Roboto_Slab({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Next Dragon news",
  description: "Without Fear or Favour",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='light'
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${poppins.className} min-h-full flex flex-col`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
