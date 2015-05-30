/**
 * Gulp Configuration
 *
 * A set of paths and options for Gulp to properly build our application.
 */

// Define Global Variables for our main object
var dest = './var/www/';
var src = './src/static/';

module.exports = {
    // Define module variables for easy access to source and destination dirs
    src: src,
    dest: dest,

    // BrowserSync allows us to have livereload as we work on files
    browserSync: {
        mode: 'proxy',
        all: {
            port: process.env.PORT || 8000,
            open: true
        },
        debug: {
            logFileChanges: true,
            logLevel: "debug"
        },
        serverOptions: {
            files: [
                dest + "/**",
                "!" + dest + "/**.map"
            ],
        },
        proxyOptions: {
            proxy: '127.0.0.1:8000'
        }
    },

    // Compile our SCSS files
    sass: {
        src: [
            src + 'css/screen.scss',
            src + 'css/**/*.scss'
        ],
        dest: dest + 'css',
        settings: {}
    },

    // Compile our JS files
    js: {
        src: [
            src + 'js/app.js',
            src + 'js/**/*.js'
        ],
        dest: src + 'js',
        settings: {
            bare: true
        }
    },

    // Minimize Images
    images: {
        src: src + 'img/*',
        dest: dest + 'img',
        processImages: /\.(gif|jpg|jpeg|tiff|png)$/i,
        imageminOptions: {
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            optimizationLevel: 1
        }
    },

    // Handle minimizing JS Files into a single file
    browserify: {
        extensions: [],
        transform: [],
        bundleConfigs: [
            {
              entries: src + 'js/app.js',
              dest: dest + 'js',
              outputName: 'app.js'
            }
        ]
    },

    // Django Templates
    templates: {
        src: [
            src + '../apps/*/templates/*.html',
            src + '../apps/*/templates/**/*.html',
            src + '../templates/*.html'
        ]
    },

    // Third-Party
    third_party: {
        dest: {
            js: dest + 'js',
            css: dest + 'css',
            fonts: dest + 'fonts'
        },
        js: [
            src + 'third-party/jquery/dist/jquery.min.js',
            src + 'third-party/bootstrap/dist/js/bootstrap.min.js'
        ],
        css: [
            src + 'third-party/bootstrap/dist/css/bootstrap.min.css',
            src + 'third-party/fontawesome/css/font-awesome.min.css'
        ],
        fonts: [
            src + 'third-party/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
            src + 'third-party/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
            src + 'third-party/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
            src + 'third-party/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
            src + 'third-party/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
            src + 'third-party/fontawesome/fonts/FontAwesome.otf',
            src + 'third-party/fontawesome/fonts/fontawesome-webfont.eot',
            src + 'third-party/fontawesome/fonts/fontawesome-webfont.svg',
            src + 'third-party/fontawesome/fonts/fontawesome-webfont.ttf',
            src + 'third-party/fontawesome/fonts/fontawesome-webfont.woff',
            src + 'third-party/fontawesome/fonts/fontawesome-webfont.woff2'
        ]
    }
}
