module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'public/css/style.css': 'public/css/style.scss',
          'public/css/training.css': 'public/css/training.scss'
        },
        options: {
          style: 'compressed'
        }
      }
    },

    requirejs: { 
      app: { 
        options: { 
          findNestedDependencies: true, 
          mainConfigFile: 'public/scripts/index.js', 
          baseUrl : 'public/scripts', 
          name : 'index', 
          out : 'build.js', 
          optimize : 'none',
        }
      }
    },

    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);

}