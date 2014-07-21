'use strict';

// The "wrapper" function
module.exports = function (grunt) {
  
  // Grunt configuration object
  grunt.initConfig({
    // Project and task configuration

    // This allows us to refer to the values of properties within our package.json file
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        src: 'app/js/**/*.js',
        dest: 'dist/js/app.min.js'
      }
    },

    cssmin: {
      // options here
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
  grunt.registerTask('uglifni', ['uglify']);
  grunt.registerTask('cssminni', ['cssmin']);
  grunt.registerTask('lessni', ['less']);
  grunt.registerTask('autoprefixni', ['autoprefixer']);

}