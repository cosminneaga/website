// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"
import stylistic from "@stylistic/eslint-plugin"

export default withNuxt({
  "plugins": {
    "@stylistic": stylistic,
  },
  "rules": {
    "nuxt/prefer-import-meta": "error",
    "vue/multi-word-component-names": "off",
    "quotes": ["error", "double"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "vue/no-v-html": "off",
    "vue/no-unused-components": "warn",
    "vue/no-unused-vars": "warn",
    "vue/require-default-prop": "off",
    "vue/require-prop-types": "off",
    "vue/require-v-for-key": "off",
    "vue/valid-v-slot": "off",
    "vue/valid-template-root": "off",
    "vue/valid-v-bind": "off",
    "vue/valid-v-else": "off",
    "vue/valid-v-else-if": "off",
    "vue/valid-v-for": "off",
    "vue/valid-v-if": "off",
    "vue/valid-v-model": "off",
    "vue/valid-v-on": "off",
    "vue/valid-v-pre": "off",
    "vue/valid-v-show": "off",
    "vue/valid-v-text": "off",

    "@stylistic/indent": ["error", 2],
  },
})
