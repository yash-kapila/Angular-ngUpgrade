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
        'typescript': 'npm:typescript@2.0.2/lib/typescript.js'
    },
    //packages defines our app package
    packages: {
        app: {
            defaultExtension: 'ts'
        }
    }
});