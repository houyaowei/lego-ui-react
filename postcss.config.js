module.exports = {
  plugins: [
    require("autoprefixer")({
      browsers: [
        "last 2 versions",
        "Firefox ESR",
        "not ie < 10",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 6",
        "opera >= 12.1",
      ],
    }),
  ],
};
