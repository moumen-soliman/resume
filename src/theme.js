const white = "#fff";
const black = "#161617";
const darkBlue = "#1a202c";

const themeLight = {
  background: white,
  body: black
};

const themeDark = {
  background: darkBlue,
  body: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
