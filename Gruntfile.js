module.exports = function(grunt) {
  var target = "development";
  if (grunt.option('staging')) target="staging";
  if (grunt.option('production') || grunt.option('prod')) target="production";
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.initConfig({
    browserify: {
      all: {
        options: {
          browserifyOptions: {
            extensions: ['.jsx', '.js'],
            transform: ['babelify', ['aliasify', {
              aliases: {
                "config": "./src/config/"+target+".js"
              }
            }]]
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