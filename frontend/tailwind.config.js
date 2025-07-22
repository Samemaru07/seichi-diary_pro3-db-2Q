/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          background: "#D8B7C3",
          text: "000000"
        },
        sideNav: {
          background: "#E6E6FA",
          text: "000000",
          profile: "#FFFFFF"
        },
        fotter: {
          background: "E6E6FA",
          text: "000000"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        btn: "var(--btn)",
        btnHover: "var(--btnHover)",
        text: "var(--text)",
        textHover: "var(--textHover)",
        hamburgerBtn: "var(--hamburgerBtn)",
        sideNavBackground: "var(--sideNavBackground)",
        fotterBackground: "var(--fotterBackground)",
      },
      fontFamily: {
        header: ["var(--font-header)"],
        pageTitle: ["var(--font-mochiy-pop-one)"],
        pageParagraph: ["var(--font-contents)"]
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

