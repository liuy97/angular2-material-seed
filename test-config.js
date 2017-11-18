// Load our SystemJS configuration.
System.config({
  baseURL: '/base/',
  paths: {
    rxjs: 'node_modules/rxjs',
    '@angular/animations':
      'node_modules/@angular/animations/bundles/animations.umd.js',
    '@angular/platform-browser/animations':
      'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
    '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
    '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
    '@angular/compiler':
      'node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
    '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
    '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
    '@angular/platform-browser':
      'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
    '@angular/animations/browser':
      'node_modules/@angular/animations/bundles/animations-browser.umd.js',
    'tslib': 'node_modules/tslib/tslib.js',

    '@angular/common/testing':
      'node_modules/@angular/common/bundles/common-testing.umd.js',
    '@angular/common/http/testing':
      'node_modules/@angular/common/bundles/common-http-testing.umd.js',
    '@angular/compiler/testing':
      'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/core/testing':
      'node_modules/@angular/core/bundles/core-testing.umd.js',
    '@angular/http/testing':
      'node_modules/@angular/http/bundles/http-testing.umd.js',
    '@angular/platform-browser/testing':
      'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing':
      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/router/testing':
      'node_modules/@angular/router/bundles/router-testing.umd.js',
    'rxjs/operators/*': 'node_modules/rxjs/operators/index.js',

    '@angular/material': 'node_modules/@angular/material/bundles/material.umd.js',
    '@angular/cdk/table': 'node_modules/@angular/cdk/bundles/cdk-table.umd.js',
    '@angular/cdk/accordion': 'node_modules/@angular/cdk/bundles/cdk-accordion.umd.js',
    '@angular/cdk/layout': 'node_modules/@angular/cdk/bundles/cdk-layout.umd.js',
    '@angular/cdk/keycodes': 'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js',
    '@angular/cdk/coercion': 'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js',
    '@angular/cdk/collections': 'node_modules/@angular/cdk/bundles/cdk-collections.umd.js',
    '@angular/cdk/rxjs': 'node_modules/@angular/cdk/bundles/cdk-rxjs.umd.js',
    '@angular/cdk/scrolling': 'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js',
    '@angular/cdk/a11y': 'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js',
    '@angular/cdk/bidi': 'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js',
    '@angular/cdk/observers': 'node_modules/@angular/cdk/bundles/cdk-observers.umd.js',
    '@angular/cdk/portal': 'node_modules/@angular/cdk/bundles/cdk-portal.umd.js',
    '@angular/cdk/overlay': 'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js',
    '@angular/cdk/stepper': 'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js',
    '@angular/cdk/platform': 'node_modules/@angular/cdk/bundles/cdk-platform.umd.js',
    '@angular/flex-layout': 'node_modules/@angular/flex-layout/bundles/flex-layout.umd.js',
  },
  packages: {
    '': {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
