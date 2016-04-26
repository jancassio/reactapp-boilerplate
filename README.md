# React App Boilerplate

This structure provide a very simple interface to start projects with react (or not). If you don't want to waste your time understanding other react's boilerplate projects, you should consider check out this one.

I did this to save some time creating automated structures for front-end projects, so I did it to be simple, flexible and ready to develop.

# Contents

Checkout the pre-defined features and the incoming features

* [x] [Webpack](https://webpack.github.io)
* [x] [React](https://facebook.github.io/react/)
* [x] [Babel](https://babeljs.io/)
* [x] [Sass](http://sass-lang.com/)

# Features

* [x] ES6 ready
* [x] Modular based structure
* [x] Development server
  * [x] Hot reload
* [x] Webpack stats
* [x] Optimize for production
  * [x] Chunk hashed files
  * [x] Update only changed chunks
  * [x] Automatic inject CSS and JS on index


# Installing

I suppose you have [npm](http://www.npmjs.com) installed, so:

1. Clone this project to your computer
`git clone https://github.com/jancassio/reactapp-boilerplate.git`

2. Install dependencies defined at `package.json` file with:
`npm install`

# Running

### Development

At command line, simple do `npm start`. this will create an web server (powered by webpack) at [localhost:8080](http://localhost:8080).

### Profiling

This project is optimized to generate chunk pieces of javascript, to analyze that use `npm run stats`, this will generate a file named `stats.json` at project root, so you can go to [webpack analyze tool](https://webpack.github.io/analyse/) to inspect your project's output.

### Building

Simple do `npm run build`, this will generate a folder named `build` at project root, the content inside this folder, can be deployed in production.

# LICENSE
## MIT
