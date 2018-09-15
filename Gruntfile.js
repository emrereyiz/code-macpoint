module.exports = function(grunt) {
  require('jit-grunt')(grunt);
    grunt.initConfig({
        less: {
          development: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              "_assets/css/macpoint.css": "_assets/css/less/all.less"
            }
          }
        },
	  	concat: {
        options: {
		      separator: ';',
		    },
		    dist: {
          src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/wow/dist/js/wow.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/swiper/dist/js/swiper.js','_assets/js/custom/macpoint-custom.js'],
          dest: '_assets/js/macpoint.js',
		    },
	  	},
      watch: {
        styles: {
          files: ['_assets/**/*.less'], // which files to watch
          tasks: ['less'],
          options: {
            nospawn: true
          }
        },
        script: {
          files: ['_assets/**/*.js'],
          tasks: ['concat'],
          options: {
            nospawn: true
          }
        },
      },
      browserSync: {
          dev: {
              bsFiles: {
                  src : [
                    '**.css',
                    '**.less',
                    '**.js',
                    '**.html'
                  ]
              },
              options: {
                  server: {
                      baseDir: "./"
                  },
                  watchTask: true
              }
          }
      }                                                                                                                                                                                                                                                             
    });

  	grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['concat', 'less',  'browserSync', 'watch']);

};
