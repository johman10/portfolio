module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'style/scss',
          cssDir: 'style/css',
          imagesDir: 'img',
          javascriptsDir: 'js',
          fontsDir: 'style/fonts',
          outputStyle: 'compressed',
          watch: true
        }
      }
    }
  });

  grunt.registerTask('default', 'compass');
};
