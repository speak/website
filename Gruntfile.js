module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  
  grunt.registerMultiTask('build', 'Build the account', function(){
    grunt.task.run(this.data.tasks);
  });
};