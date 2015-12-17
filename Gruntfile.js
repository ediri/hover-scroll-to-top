/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! \n * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * License: <%= pkg.license %>\n' +
        ' */\n',

        // Task configuration.
        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'gzip'
            },
            build: {
                src: ['build/scrollToTop.js'],
                dest: 'build/scrollToTop.min.js'
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            source: {
                expand: true,
                cwd: 'src',
                src: ['*.js'],
                dest: 'build'
            }
        },

        cssmin: {
            options: {
                banner: '<%= banner %>',
                report: 'gzip'
            },
            minify: {
                src: 'src/scrollToTop.css',
                dest: 'build/scrollToTop.min.css'
            }
        },

        jshint: {
            jshintrc: '.jshintrc',
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['src/*.js']
            }
        },

        concat: {
            build: {
                options: {
                    banner: '<%= banner %>'
                },
                files: {
                    'build/scrollToTop.css': 'src/scrollToTop.css',
                    'build/scrollToTop.js': ['build/scrollToTop.js'],
                }
            }
        },
        gitcommit: {
            build: {
                options: {
                    cwd: "/build"
                },
                files: [
                    {
                        src: ["build/*.js", "build/*.css"]
                    }
                ]
            }
        },
        gitpush: {
            build: {
                options: {
                    force: true
                },
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['uglify', 'concat:build'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['src/*.css'],
                tasks: ['cssmin', 'concat:build'],
                options: {
                    spawn: false,
                },
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-git');

    grunt.registerTask('default', ['jshint', 'ngAnnotate', 'uglify', 'cssmin', 'concat:build', 'gitcommit:build', 'gitpush:build']);
    grunt.registerTask('build', ['default']);

};
