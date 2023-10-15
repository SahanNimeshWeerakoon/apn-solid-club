module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `
          @import "./src/assets/scss/_variables.scss";
          @import "./src/assets/scss/_mixins.scss";
          @import "./src/assets/scss/_common.scss";
          `
        }
      }
    }
};