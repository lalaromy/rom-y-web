import "../styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";

function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/contact") setOpen(true);
  }, [router]);

  const goBack = () => {
    setOpen(false);
    router.back();
  };

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Staatliches&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="../romy_logo.png">
        <meta property="og:width" content="1200">
        <meta property="og:height" content="600">
      </Head>
      <Component {...pageProps} />

      {open ? (
        <a onClick={() => goBack()}>
          <img className={"plus-sign-close"} src={"../plus-white.png"} />
        </a>
      ) : (
        <Link href="/contact" onClick={() => setOpen(true)}>
          <img className={"plus-sign"} src={"../plus.png"} />
        </Link>
      )}
    </>
  );
}

export default App;
