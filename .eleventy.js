module.exports = function (config) {
  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/styles')
  config.addPassthroughCopy({
    'node_modules/normalize.css/normalize.css': 'styles/normalize.css',
  })
  config.addPassthroughCopy({
    'node_modules/flexboxgrid/dist/flexboxgrid.css': 'styles/flexboxgrid.css',
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
