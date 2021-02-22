import { useEffect, useState } from "react";
import MenuWheel from "../menu/MenuWheel";
import { metaTags, data } from "../data/en/about";
import Head from "next/head";
import { useRouter } from "next/router";
import { buildMetatags } from "../utils/metaTags";
import AboutPage from "../components/About";
import Banner from "../components/Banner";

const Contact = () => {
  const router = useRouter();
  const { asPath } = router;
  const metatags = metaTags;
  const canonicalUrl = `https://rom-y.com${asPath}`;
  const [selectSubMenu, setSelectSubMenu] = useState();

  const newMetatags = [
    ...metatags,
    {
      name: "canonical",
      value: canonicalUrl,
      type: "MetaLink",
    },
  ];

  const meta = buildMetatags(newMetatags);

  const getSubMenu = (value) => {
    setSelectSubMenu();
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {meta}
      </Head>
      <div className="contact-container">
        <a href="mailto:hello@rom-y.com">hello@rom-y.com</a>
        <a href="https://github.com/romyabbrederis" target="_blank">
          {" "}
          <img className="icon" src="../coding.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/romy-abbrederis-05471456/"
          target="_blank"
        >
          <img className="icon" src="../linkedin.png" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
