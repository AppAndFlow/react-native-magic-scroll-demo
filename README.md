![image](https://github.com/AppAndFlow/react-native-magic-scroll-demo/assets/129197567/b1d03e8a-e002-4375-a417-b5c81962ad66)


## Template for starting apps.

This is a basic template following App and Flow's conventions.
It's a managed expo app that comes with a basic structure and some simple CI/CD.

### Techs Stack

- npm
- React navigation v6 + basic navigation
- eslint
- expo sdk49
- mobx
- ui store
- typography
- font/images templates
- config.js template
- basic utils (delay fn, text utils)
- basic constants (colors, metrics)
- gitignore

### CI/CD (Github Actions)

This template comes with a single Github Actions that aims to valide the code structure.
It will attempt to run eslint with automatic code correction when possible. It will automatically commit a _linted_ version of the codebase for each _push_ action on **master**.

## Installation

Run the following command:
`npm i`

## Start

Depending on what you want, you can run the following commands

### Starts on iOS

`npm run ios`

### Starts on Android

`npm run android`

### Starts the packager

`npm run start`
