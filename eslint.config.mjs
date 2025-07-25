import { fixupConfigRules } from '@eslint/compat'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    )
  ),
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module'
    },

    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        }
      }
    }
  }
]
