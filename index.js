"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var b = require('bobril');
var fun_model_1 = require('fun-model');
var fun_model_2 = require('fun-model');
exports.getState = fun_model_2.getState;
exports.setState = fun_model_2.setState;
exports.rootCursor = fun_model_2.rootCursor;
exports.shallowCopy = fun_model_2.shallowCopy;
exports.createAction = fun_model_2.createAction;
exports.createActions = fun_model_2.createActions;
__export(require('./src/component'));
__export(require('./src/routeComponent'));
__export(require('./src/dataComponent'));
exports.bootstrap = function (defaultState, params) {
    if (params === void 0) { params = {}; }
    fun_model_1.bootstrap(defaultState, function () { return b.invalidate(); }, params);
};
exports.defaultStateName = "";
