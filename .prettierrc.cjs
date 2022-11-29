module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  plugins: ['prettier-plugin-svelte', require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
};
