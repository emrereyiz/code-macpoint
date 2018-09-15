module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    watch: {
      files: [
        '_assets/css/less/**.less',
        '_assets/js/custom/**.js',
      ],
      tasks: ['less', 'concat'],
    },
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
	      src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/swiper/dist/js/swiper.js', '_assets/js/custom/macpoint-custom.js'],
	      dest: '_assets/js/macpoint.js',
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
                watchTask: true,
                server: ''
            }
        }
    }
  });


  grunt.registerTask('default', ['less', 'concat', 'browserSync', 'watch']);

};