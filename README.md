# ButOpen Design System

A pure SCSS and Tailwind Design System. No JS. Framework-agnostic

## Why another design system

There are many design systems out there. Unfortunately the only weay we found for a design system to be completely
reusable is to publish it with styles only.

Using only styles, you can quickly integrate it into any framework.

Now you're thinking: _"ok, but what if I want a date component with some logic?"_
Well, then we expose the few useful functions to speed up the implementation of that specific component into your
frontend framework.

## If you want to use it as CSS
Add the css file and customize the main color:
```html

<link rel="stylesheet" href="https://unpkg.com/@butopen/design-system@1.0.0/dist/index.css">
<style>
    :root {
        --bo-theme-color: #0085d7; /* choose your color here*/
    }
</style>

```

## If you want to use it as SCSS

- import it into your style.scss

```scss
@import 'node_modules/@butopen/design-system/src/index';

:root {
  --bo-theme-color: #ff4d00;
}
```

- extend your tailwind configuration to support the primary color classes such as `text-bop`, `border-bop` and so on:

```typescript
const tw = require('@butopen/design-system/tailwind.config');

module.exports = {
  mode: 'jit',
  important: true,
  content: ['./src/styles.scss', './src/**/*.{html,ts,scss}'],
  theme: {
    extend: { ...tw.theme.extend }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

```

You can then customize every class by adding your custom rules.

Below you can find an example:

```scss

.bo-tab {
  @apply text-sm uppercase;
}

a {
  @extend .bo-link;
  @apply text-bop; // <-- note the usage of the primary color here
}

.bo-section {
  @apply rounded border border-bop p-8;// <-- note the usage of the primary color for the border here
}

.bo-button {
  @extend .bo-animate-bg-on-hover // here we enable some cool animations for every button
}

.bo-input {
  @apply bg-gray-50 hover:shadow-sm
}

.form-error {
  @apply text-red-500 text-sm;
  &:before {
    content: "*";
    @apply mr-1
  }
}
```

## For developers wanting to customize the sources

1) Install the required packages
   ```pnpm i```

Yes, we use pnpm. if you're still using NPM, then you don't care about time how much as we do ;-)

If you want to save hours, do yourself a favour and install it [https://pnpm.io/](https://pnpm.io/)

2) Build from sources
To build the final CSS file, simply run
```pnpm build```

And if you want to extend it or try it live, run
```pnpm start```

3) Check the result
And open the `index.html` file into your browser.



