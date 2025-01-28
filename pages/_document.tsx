import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Timeless Treasures PH</title>
                <meta name="description" content="Memories are Timeless Treasures of the Heart" />
                <meta name="keywords" content="timelesstreasures, timelesstreasuresph, timeless, treasures, timelessph, treasuresph, craft, rentals, souvenirs, styling, weddings, events, personalized" />
                <meta property="og:title" content="Timeless Treasures PH" />
                <meta property="og:description" content="Memories are Timeless Treasures of the Heart" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/header-logo.jpg" />
                <meta property="og:site_name" content="Timeless Treasures PH" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
