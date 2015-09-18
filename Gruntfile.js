module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.initConfig({
    browserify: {
      all: {
        options: {
          browserifyOptions: {
            extensions: ['.jsx', '.js'],
            transform: ['babelify']
          }
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['account.js'],
          dest: '_assets/js'
        }]
      }
    },
    watch: {
      js: {
        files: ['src/**/*.jsx', 'src/**/*.js'],
        tasks: ['browserify']
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['browserify']);
};