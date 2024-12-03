import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Analytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <title>Bubble Waffle Harrachov - Nejlepší Waffle v Harrachově</title>
        <meta
          name="description"
          content="Rodinný stánek v srdci malebného Harrachova. Naše vášeň je v používání prvotřídních surovin a vytváření nezapomenutelných sladkých zážitků."
        />
        <meta
          name="keywords"
          content="waffle, Harrachov, sladké zážitky, rodinný stánek, nejlepší waffle"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Bubble Waffle Harrachov - Nejlepší Waffle v Harrachově"
        />
        <meta
          property="og:description"
          content="Rodinný stánek v srdci malebného Harrachova. Naše vášeň je v používání prvotřídních surovin a vytváření nezapomenutelných sladkých zážitků."
        />
        <meta
          property="og:image"
          content="https://www.bubblewaffleharrachov.cz/pics/head/2326.webp"
        />
        <meta
          property="og:url"
          content="https://www.bubblewaffleharrachov.cz/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bubble Waffle Harrachov - Nejlepší Waffle v Harrachově"
        />
        <meta
          name="twitter:description"
          content="Rodinný stánek v srdci malebného Harrachova. Naše vášeň je v používání prvotřídních surovin a vytváření nezapomenutelných sladkých zážitků."
        />
        <meta
          name="twitter:image"
          content="https://www.bubblewaffleharrachov.cz/pics/head/2326.webp"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
