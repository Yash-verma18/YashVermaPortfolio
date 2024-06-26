import Head from "next/head";
import DarkLight from "@/components/DarkLight";
import Theme from "@/components/Theme";
import "./globals.css";

export const metadata = {
  title: "Fullstack Web3 Engineer : Yash Verma Portfolio",
  description:
    "Portfolio showcasing Yash Verma, a Fullstack Blockchain Developer specializing in decentralized solutions. Explore my projects, skills, and experiences in building robust, scalable blockchain applications and decentralized systems.",
  image: "/images/profile4.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content={
            "portfolio, yash-verma, web3, blockchain, projects, development, fullstack, developer, development, website"
          }
        />
        {/* Open graph tags start */}
        <meta
          name="title"
          property="og:title"
          content="YASH VERMA : SOFTWARE ENGINEER"
        />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content="https://yash-verma.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:secure_url" content={metadata.image} />
        <meta property="og:site_name" content="yash-verma.me" />
        <meta property="og:locale" content="en_US" />
        {/* Open graph tags end */}

        {/* Twitter Metatags start */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:image:alt" content="Twitter Image" />
        {/* Twitter Metatags ends */}
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
