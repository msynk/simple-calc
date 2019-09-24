+function (app) {
    var _el = app.elements;

    _el.mempad.onclick = function (e) {
        app.mem(e.target.textContent.toLowerCase());
    }

    _el.numpad.onclick = function (e) {
        app.val('' + (app.val() || '') + e.target.textContent);
    }

    _el.screen.onclick = function () {
        app.val(0);
    }

    app.val = function (v) {
        if (v == undefined) return +_el.screen.textContent;

        if (isNaN(+v)) throw new Error('not a number: "' + v + '"');
        return _el.screen.textContent = v;
    };
}(app);