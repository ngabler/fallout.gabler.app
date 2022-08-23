module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("d3.v3.min.js");
};
