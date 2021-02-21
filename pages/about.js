import { useEffect, useState } from "react";
import MenuWheel from "../menu/MenuWheel";
import { metaTags, data } from "../data/en/about";
import Head from "next/head";
import { useRouter } from "next/router";
import { buildMetatags } from "../utils/metaTags";
import AboutPage from "../components/About";
import Banner from "../components/Banner";

const About = () => {
  const router = useRouter();
  const { asPath } = router;
  const metatags = metaTags;
  const canonicalUrl = `https://azuvia.fr${asPath}`;
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
    console.log("getSubMenu", value);
    setSelectSubMenu();
  };

  console.log("selectSubMenu", selectSubMenu);

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {meta}
      </Head>
      <MenuWheel
        currentMenu={"about"}
        currentMenuIndex={0}
        getSubMenu={getSubMenu}
      />
      <AboutPage data={data} />
      {/* <Banner /> */}
    </div>
  );
};

export default About;
