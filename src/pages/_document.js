import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href="/"></base>
        <title>React eCommerce Template</title>
        <link rel="icon" href="images/icons/favicon.png" />

        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/riode-fonts/riode-fonts.css"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=optional"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/fontawesome-free/css/all.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
