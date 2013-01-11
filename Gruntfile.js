module.exports = function(grunt) {
  grunt.initConfig({    
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'simple-styles.css': 'src/simple-styles.scss'
        }
      }
    },
    
    mincss: {
      compress: {
        files: {
          'simple-styles.min.css': 'simple-styles.css'
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.registerTask('default', ['sass', 'mincss']);
};