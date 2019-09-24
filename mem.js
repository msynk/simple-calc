+function (app) {
    var _memory = 0,
        _operations = {
            'mc': function () { _memory = 0; },
            'mr': function () { app.val(_memory); },
            'ms': function () { _memory = app.val(); },
            'm+': function () { _memory += app.val(); },
            'm-': function () { _memory -= app.val(); },
        };

    app.mem = function (op) {
        var action = _operations[op];
        if (!action) return;
        action();
    };
}(app);