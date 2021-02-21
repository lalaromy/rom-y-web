import { useEffect, useState } from "react";
import MenuWheel from "../menu/MenuWheel";
import { metaTags, data } from "../data/en/about";
import Head from "next/head";
import { useRouter } from "next/router";
import { buildMetatags } from "../utils/metaTags";
import AboutPage from "../components/About";
import Banner from "../components/Banner";

const Bank = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Secret Life of Romy</title>
      </Head>
      <div className="bank-container">
        <p>
          <strong>IBAN: </strong>
          LI86 0880 5503 8403 6000 1
        </p>
        <p>
          {" "}
          <strong>SWIFT / BIC: </strong>
          VPBVLI2X
        </p>
        <p>
          <strong>BANK: </strong>VP Bank Vaduz
        </p>
      </div>
    </div>
  );
};

export default Bank;
