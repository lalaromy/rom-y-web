export const buildMetatags = (metatags) => {
  return metatags.reduce((acc, metatag) => {
    const { name, value, type } = metatag;
    let meta;

    if (type === "MetaValue") {
      const titleTag = <title>{value}</title>;
      meta =
        name !== "title" ? (
          <meta name={name.trim()} content={value} />
        ) : (
          titleTag
        );
    } else if (type === "MetaLink") {
      meta = <link rel={name.trim()} href={value} />;
    } else if (type === "MetaProperty") {
      meta = <meta property={name.trim()} content={value} />;
    }

    return [...acc, meta];
  }, []);
};
