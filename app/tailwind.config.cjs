/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, "src/**/*!(*.stories|*.spec).{ts,tsx,html}")],
  theme: {
    extend: {},
  },
  plugins: [],
};
