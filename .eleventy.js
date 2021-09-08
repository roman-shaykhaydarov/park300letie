module.exports = function (config) {
  config.addPassthroughCopy('src/images')
  config.addPassthroughCopy('src/styles')

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
