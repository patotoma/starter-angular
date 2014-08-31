'use strict';

// The "wrapper" function
module.exports = function (grunt) {
  
  // Grunt configuration object
  grunt.initConfig({
    // Project and task configuration

    // This allows us to refer to the values of properties within our package.json file
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'app/js/**/*.js',
        dest: 'dist/js/app.min.js'
      }
      // create separate files
      // separately: {
      //   expand: true,
      //   cwd: 'app/js/',
      //   src: '**/*.js',
      //   dest: 'dist/js/',
      //   ext: '.min.js'
      // }
    },

    cssmin: {
      build: {
        src: 'tmp/*.css',
        dest: 'dist/css/style.min.css'
      }
    },

    less: {
      build: {
        expand: true,
        flatten: true,
        src: 'app/css/**/*.less',
        dest: 'tmp/',
        ext: '.css'
      }
    },

    autoprefixer: {
      build: {
        expand: true,
        flatten: true,
        src: 'app/css/**/*.css',
        dest: 'tmp/'
      }
    },

    clean: {
      tmp: {
        src: 'tmp'
      },
      dist: {
        src: 'dist'
      }
    },

    exec: {
      copyIndex: 'cp app/*.html dist/',
      copyViews: 'cp -r app/views dist/'
    }

  });

  // Loading Grunt plugins and tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', []);
  // Custom tasks
  grunt.registerTask('dist', ['clean', 'uglify', 'less', 'autoprefixer', 'cssmin', 'exec', 'clean:tmp']);

};