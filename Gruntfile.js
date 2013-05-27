'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

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

    cssmin: {
      combine: {
        files: {
          'simple-styles.min.css': 'simple-styles.css'
        }
      }
    },

    connect: {
      livereload: {
        options: {
          port: 9002,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, '.')]
          }
        }
      }
    },

    // Configuration to be run (and then tested)
    regarde: {
      project: {
        files: ['*.js', '*.css', '*.html'],
        tasks: ['livereload']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('default', ['sass', 'cssmin', 'livereload-start', 'connect', 'regarde']);
};