module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          compress: false,
          paths: ['styles']
        },
        files: {
          'simple-styles.css': 'styles/main.styl'
        }
      }
    },
    
    csslint: {
        base_theme: {
            src: "simple-styles.css",
        }
    },
    
    cssmin: {
      dist: {
        src: 'simple-styles.css',
        dest: 'simple-styles.min.css'
      }
    }
  
  });
  
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-css');
  grunt.registerTask('default', 'stylus cssmin');
};