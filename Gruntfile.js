module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    // flattens results to a single level
                    { src: ['lib/index.js'], dest: 'dist/japanese-stopword.js', filter: 'isFile' },
                ],
            },
        },
        uglify: {
            build_dist: {
                files: {
                    'dist/japanese-stopword.min.js': ['./lib/index.js']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};
