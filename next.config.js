const withCSS = require('@zeit/next-css')
//module.exports = withCSS({
//  cssLoaderOptions: {
//    url: false
//  } 
//})

const withTM = require('next-transpile-modules')(['mapbox-gl']); // pass the modules you would like to see transpiled
 
module.exports = withTM(withCSS({
  cssLoaderOptions: {
    url: false
  } 
}));
