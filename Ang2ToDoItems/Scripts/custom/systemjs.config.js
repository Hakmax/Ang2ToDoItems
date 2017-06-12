(function (global) {
    var paths = {
        "npm":"node_modules"
    };

    var map = {
        "@angular": "npm/@angular",
        "custom":"Scripts/custom",
        "rxjs": "npm/rxjs",
        "ng2-bootstrap-modal": "npm/ng2-bootstrap-modal",
        "lodash": "npm/lodash",
        "ngx-bootstrap": "npm/ngx-bootstrap/bundles",
        "angular2-cookie":"npm/angular2-cookie"
    };
    map["angular2-modal/plugins/bootstrap"] = map["angular2-modal"]+"/bundles";

    var pckg = {
        custom: {},
        rxjs: {
            main:"Rx.js"
        }
    };

    var angModules = ["common", "compiler", "core", "platform-browser",
    "platform-browser-dynamic", "forms", "http", "router"];

    angModules.forEach(function (item) {
        pckg["@angular/" + item] = {
            main:"bundles/"+item+".umd.min.js"
        };
    });


    pckg["lodash"] = {
        main:"lodash.js"
    };

    pckg["ngx-bootstrap"] = {
        main: "ngx-bootstrap.umd.js"
    };

    pckg["angular2-cookie"] = {
        main: "core.js"
    };

    pckg["ng2-bootstrap-modal"] = {
        main:"index.js"
    };

    System.config({
        //defaultJSExtensions: true,
        baseURL: '/',
        paths: paths,
        packages: pckg,
        map: map/*,
        transpiler: null*/
    });

})(this);