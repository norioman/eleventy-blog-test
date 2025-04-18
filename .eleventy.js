const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // date フィルター追加
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  return {
    dir: {
      input: "src",
      output: "docs"
    }
  };
};

