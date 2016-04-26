# React App Boilerplate

Here is a very simple structure to start react projects using webpack.

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
