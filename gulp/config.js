'use strict';

/**
 * Gulp Configuration
 *
 * A set of paths and options for Gulp to properly build our application.
 */

// Define Global Variables for our main object
var dest  = './var/www/';
var src   = './src/static/';

module.exports = {
  // Define module variables for easy access to source and destination dirs
  src: src,
  dest: dest,
  server: './etc/scripts/server.js',

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
    src: src + 'css/**/*.scss',
    dest: dest + 'css',
    settings: {
      style: 'expanded'
    }
  },

  // Autoprefix our compiled CSS
  autoprefixer: {
    settings: {
      browsers: ['last 2 versions']
    }
  },

  // Minimize our compiled CSS
  minifycss: {
    settings: {
      advanced: false,
      roundingPrecision: 3
    }
  },

  // Compile our JS files
  js: {
    src: [
      src + 'js/*.js',
      src + 'js/**/*.js'
    ],
    dest: dest + 'js/app_dist.js'
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
    transform: [
      'reactify'
    ],
    bundleConfigs: [
      {
        entries: src + 'js/app.js',
        dest: dest + 'js',
        outputName: 'app_dist.js'
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
    js: [],
    css: [],
    fonts: []
  }
}
