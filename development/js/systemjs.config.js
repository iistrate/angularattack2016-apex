System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},
    map: {
        'app' : 'app',
        'rxjs': 'libs/rxjs',

        '@angular/core'                    : 'libs/@angular/core',
        '@angular/common'                  : 'libs/@angular/common',
        '@angular/compiler'                : 'libs/@angular/compiler',
        '@angular/router'                  : 'libs/@angular/router',
        '@angular/platform-browser'        : 'libs/@angular/platform-browser',
        '@angular/platform-browser-dynamic': 'libs/@angular/platform-browser-dynamic'
    },
    packages: {
        'app'                              : {main: 'main', defaultExtension: 'js'},
        'rxjs'                             : {main: 'Rx.umd.js'},
        '@angular/core'                    : {main: 'core.umd.js'},
        '@angular/common'                  : {main: 'common.umd.js'},
        '@angular/compiler'                : {main: 'compiler.umd.js'},
        '@angular/router'                  : {main: 'router.umd.js'},
        '@angular/platform-browser'        : {main: 'platform-browser.umd.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.js'}
    }
});