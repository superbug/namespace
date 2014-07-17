(function(global) {
    var globalNamespace = global['namespace'],
        proto,
        require = function(path) {
            var parts = path.split('.'),
                ns = globalNamespace,
                i = 0;
            for (; i < parts.length; i++) {
                if (typeof ns[parts[i]] === 'undefined') {
                    ns[parts[i]] = new Module();
                }
                ns = ns[parts[i]];
            }
            return ns;
        },
        Module = function() {};

    if (globalNamespace) {
        globalNamespace.constructor = Module;
    } else {
        global['namespace'] = globalNamespace = new Module();
    }

    proto = Module.prototype;

    proto['module'] = function(path, closure) {
        var exports = require(path);
        if (closure) {
            closure(exports, require);
        }
        return exports;
    };

    proto['extend'] = function(exports) {
        for (var sym in exports) {
            if (exports.hasOwnProperty(sym)) {
                this[sym] = exports[sym];
            }
        }
    };
}(this));


