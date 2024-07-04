// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  // Add your custom ESLint rules here
  rules: {
    'vue/no-multiple-template-root': 'off', // Example rule
    'vue/html-self-closing': 'off',
    'vue/first-attribute-linebreak': 'off'
    // ... add more custom rules as needed
  },
  // You can also add other ESLint configuration options here
});
