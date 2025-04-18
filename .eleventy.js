const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // date フィルター追加
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    const date = value ? new Date(value) : new Date();
    return DateTime.fromJSDate(date).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};

