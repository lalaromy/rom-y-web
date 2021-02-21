import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../romy-white-logo.png" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Montserrat:wght@100;200;400;500;600;700;800;900&family=Staatliches&display=swap');
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
