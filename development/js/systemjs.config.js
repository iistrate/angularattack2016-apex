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
        'rxjs'                             : {main: 'index.js'},
        '@angular/core'                    : {main: 'index.js'},
        '@angular/common'                  : {main: 'index.js'},
        '@angular/compiler'                : {main: 'index.js'},
        '@angular/router'                  : {main: 'index.js'},
        '@angular/platform-browser'        : {main: 'index.js'},
        '@angular/platform-browser-dynamic': {main: 'index.js'}
    }
});