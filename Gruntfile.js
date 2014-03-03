module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    cssDir: './assets/themes/Rplus/css/',
                    sassDir: './assets/themes/Rplus/_scss/',
                    imagesDir: './assets/themes/Rplus/img/'
                }
            }
        },

        connect: {
            server: {
                options: {
                    // protocol: 'https'
                }
            }
        },

        autoprefixer: {
            // option: browsers: ['last 2 version', 'ie 8', 'ie 9'],
            multiple_files: {
                expand: true,
                flatten: true,
                src: './assets/themes/Rplus/css/*.css',
                dest: './assets/themes/Rplus/css/'
            }
        },

        cssmin: {
            minify: {
                files: {
                    './assets/themes/Rplus/css/style.css': './assets/themes/Rplus/css/style.css',
                    './assets/themes/Rplus/css/style-ie.css': './assets/themes/Rplus/css/style-ie.css'
                }
            }
        },

        shell: {
            move: {
                command: 'cp -f ./assets/themes/Rplus/css/style.css ./_site/assets/themes/Rplus/css/style.css'
            },
        },

        watch: {
            compass: {
                files: ['./assets/themes/Rplus/_scss/*.scss'],
                tasks: ['compass', 'autoprefixer', 'shell'],
                options: {
                    livereload: true
                }
            }/*,
            html: {
                files: ['./index.html'],
                options: {
                    livereload: true
                }
            }*/
        }
    });

    // Default task.
    grunt.registerTask('default', ['compass', 'cssmin']);
    grunt.registerTask('see', ['connect', 'watch']);
    grunt.registerTask('make', ['compass', 'autoprefixer','cssmin']);
};