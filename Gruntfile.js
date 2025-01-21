module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            production: {
                files: {
                    'dist/styles.css': 'src/styles.less'
                }
            }
        },
        uglify: {
            build: {
                src: 'src/app.js',
                dest: 'dist/app.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
};
