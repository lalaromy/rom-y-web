const redirects = require("./utils/redirects");

module.exports = {
  async redirects() {
    return [...redirects];
  },
};
