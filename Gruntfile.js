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
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app/js/app.js',
        dest: 'dist/js/app.min.js'
      }
    }

  });

  // Loading Grunt plugins and tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', []);
  // Custom tasks
  grunt.registerTask('uglifni', ['uglify']);

}