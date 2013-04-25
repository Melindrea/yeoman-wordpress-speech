// Generated on 2013-04-25 using generator-webapp 0.1.6
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'wordpress/wp-content/themes/theme-name',
        wordpress: 'wordpress'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['js']
            },
            compass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server', 'modernizr']
            },
            php: {
                files: ['<%= yeoman.app %>/theme/**/*.php'],
                tasks: ['phplint']
            },
            theme: {
                files: ['<%= yeoman.app %>/theme/**'],
                tasks: ['copy:theme']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '<%= yeoman.app %>/theme/**',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        phplint: {
            theme: ['<%= yeoman.app %>/theme/**/*.php']
        },
        //Add the modernizr task with the following configuration
        modernizr: {
            // [REQUIRED] Path to the build you're using for development.
            devFile: 'app/components/modernizr/modernizr.js',

            // [REQUIRED] Path to save out the built file.
            outputFile: 'app/components/modernizr/modernizr.min.js',

            // Based on default settings on http://modernizr.com/download/
            extra: {
                shiv: true,
                printshiv: false,
                load: true,
                mq: false,
                cssclasses: true
            },

            // Based on default settings on http://modernizr.com/download/
            extensibility: {
                addtest: false,
                prefixed: false,
                teststyles: false,
                testprops: false,
                testallprops: false,
                hasevents: false,
                prefixes: false,
                domprefixes: false
            },

            // By default, source is uglified before saving
            uglify: true,

            // Define any tests you want to impliticly include.
            tests: [],

            // By default, this task will crawl your project for references to Modernizr tests.
            // Set to false to disable.
            parseFiles: true,

            // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files.
            // You can override this by defining a "files" array below.
            // "files" : [],
            // When parseFiles = true, matchCommunityTests = true will attempt to
            // match user-contributed tests.
            matchCommunityTests: false,

            // Have custom Modernizr tests? Add paths to their location here.
            customTests: [],

            // Files added here will be excluded when looking for Modernizr refs.
            excludeFiles: [
                '.tmp/**/*',
                'dist/**/*',
                'node_modules/**/*',
                'test/**/*',
                'app/components/**/*',
                'app/vendor/**/*',
                'wordpress/**/*'
            ]
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '<%= yeoman.wordpress %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/styles',
                cssDir: '.tmp',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/styles/fonts',
                importPath: 'app/components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        csscss: {
            options: {
                verbose: true,
                outputJson: true,
                compass: true,
                failWhenDuplicates: true
            },
            dist: {
                src: ['.tmp/style.css']
            }
        },
        // not used since Uglify task does concat,
        // but still available if needed
        /*concat: {
            dist: {}
        },*/
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/style.css': [
                        '.tmp/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                },
                options: {
                    // New line for each part of the banner, like license, tags, etc
                    banner: '/* \n' +
                    'Theme Name:         Custom Theme \n' +
                    'Theme URI:          URI \n' +
                    'Description:        Description \n' +
                    '*/'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                },
                {
                    cwd: '<%= yeoman.app %>/components/wordpress',
                    expand: true,
                    src: ['**'],
                    dest: '<%= yeoman.wordpress %>'
                },
                {
                    dest: '<%= yeoman.wordpress %>/wp-config.php',
                    src: ['wp-config.php']
                },
                {
                    dest: '<%= yeoman.dist %>/README.md',
                    src: ['README.md']
                }]
            },
            theme: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/theme',
                    dest: '<%= yeoman.dist %>',
                    src: ['**']
                }]
            }
        },
        phpunit: {
            classes: {
                dir: 'test/php/spec/'
            },
            options: {
                bin: '<%= yeoman.app %>/vendor/bin/phpunit',
                bootstrap: 'test/php/phpunit.php',
                colors: true
            }
        },
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        bumpup: {
            files: ['package.json', 'component.json', 'composer.json']
        }
    });

    // load all grunt tasks. Put here because grunt-modernizr needs it after the config
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('js', [
        'jshint',
        'modernizr'
    ]);

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'mocha',
        'copy:theme',
        'phpunit'
    ]);

    grunt.registerTask('build', function (target) {
        target = target ? target : 'patch';
        grunt.task.run([
            'clean:dist',
            'useminPrepare',
            'js',
            'phplint',
            'concurrent:dist',
            'cssmin',
            'concat',
            'uglify',
            'copy',
            'phpunit',
            'rev',
            'usemin',
            'bumpup:' + target
        ]);
    });

    grunt.registerTask('lint', [
        'jshint',
        'phplint'
    ]);

    grunt.registerTask('default', [
        'lint',
        'test',
        'build'
    ]);
};
