const redirectUrls = {
  "/video": "/",
  "/brand_example": "/",
  "/graphicdesign": "/",
};

module.exports = Object.keys(redirectUrls).reduce((all, source) => {
  const redirect = {
    source,
    destination: redirectUrls[source],
    permanent: true,
  };

  return [...all, redirect];
}, []);
