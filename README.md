# bods - ButOpen Design System

A pure SCSS and Tailwind Design System. No JS. Framework-agnostic

## Why another design system

There are many design systems out there. Unfortunately the only weay we found for a design system to be completely
reusable is to publish it with styles only.

Using only styles, you can quickly integrate it into any framework.

Now you're thinking: _"ok, but what if I want a date component with some logic?"_
Well, then we expose the few useful functions to speed up the implementation of that specific component into your
frontend framework.

## If you want to use it

```html

<link rel="stylesheet" href="https://unpkg.com/@butopen/design-system@1.0.0/dist/index.css">
<style>
    :root {
        --bo-theme-color: #0085d7; /* choose your color here*/
    }
</style>

```

## For developers wanting to customize the sources

```pnpm i```
Yes, we use pnpm. if you're still using NPM, then you don't care about time how much as we do ;-)
If you want to save hours, do yourself a favour and install it [https://pnpm.io/](https://pnpm.io/)

To build the final CSS file, simply run
```pnpm build```

And if you want to extend it or try it live, run
```pnpm start```

And open the `index.html` file into your browser.



