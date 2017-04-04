System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    //map tells the System loader where to look for things
    map: {
        'app': '',
        'angular': 'npm:angular/angular.min.js',
        'typescript': 'npm:typescript/lib/typescript.js',

        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.min.js',
        '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',

        // other libraries
        'rxjs': 'npm:rxjs',
    },
    //packages defines our app package
    packages: {
        app: {
            defaultExtension: 'ts'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});