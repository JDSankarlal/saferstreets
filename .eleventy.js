const markdownIt = require("markdown-it");


module.exports =  function (eleventyConfig) {
    const options = {
        html: true,
        breaks: true,
        linkify: true
    };
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets/fonts");
    eleventyConfig.addPassthroughCopy("./src/assets/images");

    const md = markdownIt(options)
    
    eleventyConfig.setLibrary("md", md);
    eleventyConfig.addFilter("md", (content) => md.renderInline(content));
    
}