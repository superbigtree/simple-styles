module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: true,
          paths: ['styles']
        },
        files: {
          'exp.css': 'styles/main.styl'
        }
      }
    }
  
  });
  
  grunt.loadNpmTasks('grunt-contrib-stylus');
  
  grunt.registerTask('default', 'stylus');
};