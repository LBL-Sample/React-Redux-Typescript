var express = require('express');
var settings_1 = require('./settings');
var router = express.Router();
router.get('*', function (req, res) {
    res.sendfile(settings_1.default.clientRoot + '/index.html');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=router.js.map