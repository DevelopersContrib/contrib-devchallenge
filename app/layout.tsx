import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import { getData } from "@/lib/data";

export async function generateMetadata() {
  const c = await getData();

  return {
    title:
      c.data.title === "" ? "Welcome to " + c.data.domainName : c.data.title,
    description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
