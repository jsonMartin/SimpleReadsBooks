// /** @type {import("prettier").Config} */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

module.exports = config;


// const config = {
//   "plugins": ["prettier-plugin-astro"],
//   "overrides": [
//     {
//       "files": "*.astro",
//       "options": {
//         "parser": "astro"
//       }
//     }
//   ]
// };



// // export default config;
