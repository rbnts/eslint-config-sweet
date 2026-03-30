# eslint-config-sweet

[![latest version](https://badgen.net/npm/v/eslint-config-sweet)](https://npmx.dev/package/eslint-config-sweet)
[![npm downloads a week](https://badgen.net/npm/dw/eslint-config-sweet)](https://npmx.dev/package/eslint-config-sweet)
[![typescript types](https://badgen.net/npm/types/eslint-config-sweet)](./eslint.config.d.ts)
[![package license](https://badgen.net/npm/license/eslint-config-sweet)](https://choosealicense.com/licenses/mit/)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for the most sweet-ass JavaScript and TypeScript. 🤙🏼

## Installation

```console
npm i -D eslint typescript eslint-config-sweet
```

## Usage

To use the package, follow the ESLint docs about [integrating shareable configs](https://eslint.org/docs/latest/use/configure/configuration-files#using-a-shareable-configuration-package).

```js
import { defineConfig } from "eslint/config";
import sweet from "eslint-config-sweet";

export default defineConfig(sweet);
```

## Pro Tip for VS Code

To make your experience even better, Microsoft has added a rad feature to VS Code that makes cleaning up `import` and `export` statements a breeze! Go to your user settings via `⌘ + ⇧ + p`, then type `user json`, and hit enter. Add `"source.organizeImports": "explicit"` to `"editor.codeActionsOnSave"` as seen [here in the VS Code docs](https://code.visualstudio.com/docs/typescript/typescript-refactoring#_code-actions-on-save), and save that bad boy.

Boom, VS Code will now automatically remove unused `import`s and `export`s, as well as sort them for ya! 🤙🏼

## How will my code look when using this?

Sweet, man. That's the point. On a more serious note though: It mostly, enforces consistency, even though it may not look like it the first few moments. It will make your code feel more lightweight and nudge you towards using more modern APIs and good practices, while maintaining readability and keeping complexity down.

## Nice to know

`sweet` may clash with your [Prettier](https://prettier.io/) setup. If you want to use both side-by-side, there's [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier). It turns off cosmetic rules from [`eslint-stylistic`](https://github.com/eslint-stylistic/eslint-stylistic), [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint), and [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn), which are all part of this package.

## License

[MIT](https://choosealicense.com/licenses/mit/)
