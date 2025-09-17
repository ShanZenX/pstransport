import {
  Poppins,
  Roboto,
  Raleway,
  Oswald,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./staticCompoents/Navbar";
import Fotter from "./staticCompoents/Footer";
import MapInput from './components/MainPage/MapInput';
import Footer from "./staticCompoents/Footer";
import ReviewsSection from "./components/MainPage/Review";

// Google fonts with CSS variables
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});


export const metadata = {
  title: "PS Transport",
  description:
    "PS Transport is your trusted taxi booking and logistics partner. Book trips, rides, and reliable transport solutions anytime, anywhere.",
  keywords: [
    "taxi booking",
    "online cab service",
    "logistics services",
    "book taxi online",
    "PS Transport",
    "ride booking",
    "transport solutions",
  ],
   icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
  authors: [{ name: "PS Transport" }],
  metadataBase: new URL("https://www.pstransport.co.in/"), 
  alternates: {
    canonical: "https://www.pstransport.co.in/",
  },
  openGraph: {
    title: "PS Transport - Taxi & Logistics Services",
    description:
      "Book taxi, trips, and logistics with PS Transport. Reliable, fast, and affordable rides.",
    url: "https://www.pstransport.co.in/",
    siteName: "PS Transport",
    images: [
      {
        url: "public/ps-logo.jpeg", // add an image in your public folder
        width: 1200,
        height: 630,
        alt: "PS Transport - Taxi Booking & Logistics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} ${raleway.variable} ${oswald.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        
        <ReviewsSection />
        <Footer/>
      </body>
    </html>
  );
}
