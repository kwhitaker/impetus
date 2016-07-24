# Impetus

This repo is my attempt at playing around with [MobX](https://mobxjs.github.io/mobx/).  The end product
is a _very_ pale imitation of the [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en) plugin for Chrome. It was forked from the [MobX React Boilerplate](https://github.com/mobxjs/mobx-react-boilerplate).

## Installation & dev startup
```
> npm install
> npm start
```

## Production build
If you want to run this app somewhere, just do `npm run build` and stick the contents of the `/build` folder somewhere.

## What it does
The app does four things:

1. Shows the current hour and minute, which update.
2. Downloads the daily background image from the [Unsplash API](https://unsplash.com/developers)
3. Provides knock-off of Chrome's "Awesome Bar", which lets you search google or navigate to a domain.
  * Searches use Google's "Lucky" action by default.
  * Prefix a search with `g!` to use the standard Google search.
4. Allows you to enter a list of To-Dos, which are stored in your browser's local storage.
