import { useEffect, useState } from "react";
import MenuWheel from "../menu/MenuWheel";
import { metaTags, data } from "../data/en/fashion";
import Head from "next/head";
import { useRouter } from "next/router";
import { buildMetatags } from "../utils/metaTags";
import FashionPage from "../components/Fashion";

const Fashion = () => {
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
    setSelectSubMenu(value);
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {meta}
      </Head>
      <MenuWheel
        currentMenu={"fashion"}
        currentMenuIndex={2}
        getSubMenu={getSubMenu}
      />
      <FashionPage projectSelected={selectSubMenu} />
    </div>
  );
};

export default Fashion;
