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
        src: 'app/css/**/*.css',
        dest: 'dist/css/style.min.css'
      }
      // separately: {
      //   expand: true,
      //   cwd: 'app/css/',
      //   src: '**/*.css',
      //   dest: 'dist/css/',
      //   ext: '.min.css'
      // }
    },

    less: {
      // options here
    },

    autoprefixer: {
      // options here
    }

  });

  // Loading Grunt plugins and tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', []);
  // Custom tasks
  grunt.registerTask('minni', ['uglify', 'cssmin']);

}