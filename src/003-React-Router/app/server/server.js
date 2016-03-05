var express = require('express');
var config_1 = require('./config');
var settings_1 = require('./settings');
var app = express();
config_1.default(app);
app.listen(settings_1.default.port, function () {
    console.log('Express server listening on %d, in %s mode', settings_1.default.port, settings_1.default.env);
});
//# sourceMappingURL=server.js.map