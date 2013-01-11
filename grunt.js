module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'simple-styles.css': 'simple-styles.scss'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', 'lint sass');
};