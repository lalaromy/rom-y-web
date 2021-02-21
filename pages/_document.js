import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-QBYV18DLYS`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments)}
        gtag("js", new Date());
        gtag("config", "G-QBYV18DLYS");
    `,
                }}
              />
            </>
          )}          */}
          <link rel="icon" href="/favicon.ico" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
