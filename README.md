namespace
=========

A micro namespace manager for javascript.


How to use?
==========

```javascript
namespace.module('Module.Core', function(exports, require) {
    exports.mothedA = function() {
        console.log('methodA');
    } 
});


namespace.module('Module.Ui', function(exports, require) {
    var core = require('Module.Core');

    core.methodA();
});


//then it will output methodA

```