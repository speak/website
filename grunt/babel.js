module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'js',
      src: ['**/*.jsx'],
      dest: '_site/js',
      ext: '.js'
    }]
  }
}