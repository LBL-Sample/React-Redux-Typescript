var path = require('path');
var express = require('express');
var morgan = require('morgan');
var router_1 = require('./router');
var settings_1 = require('./settings');
function config(app) {
    if (settings_1.default.env === 'development') {
        var webpack = require('webpack');
        var webpackConfig = require(settings_1.default.root + 'webpack.config');
        var compiler = webpack(webpackConfig);
        app.use(require('webpack-dev-middleware')(compiler, {
            noInfo: true, publicPath: webpackConfig.output.publicPaht
        }));
    }
    app.use(morgan('dev'));
    app.use('/static', express.static(path.join(settings_1.default.appRoot, 'static')));
    app.use('/', router_1.default);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = config;
//# sourceMappingURL=config.js.map