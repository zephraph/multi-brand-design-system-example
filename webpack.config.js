const brands = ["bigcorp", "doggoco"];

module.exports = brands.map(brand => ({
  resolve: {
    // Resolve the brand files first if they exist
    extensions: [`.${brand}.tsx`, `.${brand}.ts`, `.${brand}.js`, `.${brand}.json`, ".tsx", ".ts", ".js", ".json"]
  }
}));
