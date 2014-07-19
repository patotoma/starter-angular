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
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }

  });

  // Loading Grunt plugins and tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', []);
  // Custom tasks
  grunt.registerTask('uglifni', ['uglify']);

}