import DarkLight from "@/components/DarkLight";
import "./globals.css";

import Theme from "@/components/Theme";
export const metadata = {
  title: "YASH VERMA ",
  description: "Yash Verma Portfolio : Fullstack Blockchain Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}

// q: what is the purpose of this file?
// a: to create a layout that can be used across the app

// q: what is the purpose of the Theme component?
// a: to provide a theme to the app

// q: what is the purpose of the DarkLight component?
// a: to provide a dark/light mode switch to the app

// q: what is the purpose of the metadata object?
// a: to provide metadata to the app

// q: what is the purpose of the globals.css file?
// a: to provide global styles to the app

// q: what is the purpose of the html and body tags?
// a: to provide a base for the app
