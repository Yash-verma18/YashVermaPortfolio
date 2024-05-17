import Head from "next/head";
import DarkLight from "@/components/DarkLight";
import Theme from "@/components/Theme";
import "./globals.css";

export const metadata = {
  title: "Yash Verma - Fullstack Blockchain Developer",
  description:
    "Portfolio showcasing Yash Verma, a Fullstack Blockchain Developer specializing in decentralized solutions.",
  image: "/images/profile4.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content="https://yash-verma.me/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
