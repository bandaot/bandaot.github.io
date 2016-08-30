module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      hexo: {
        files: ['sources/_post/*.md'],
        tasks: ['hexo:generate'],
      },
    },

    hexo: {
      clean: {
        options: {
          root: '/',
          cliCmd: 'clean'
        }
      },
      generate: {
        options: {
          root: '/',
          cliCmd: 'generate'
        }
      },
      server: {
        options: {
          root: '/',
          cliCmd: 'server'
        }
      },
      deploy: {
        options: {
          root: '/',
          cliCmd: 'deploy'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-hexo');

  // Default task(s).
  grunt.registerTask('default', ['hexo:server','watch']);
  grunt.registerTask('d', ['hexo:generate','hexo:deploy']);

};