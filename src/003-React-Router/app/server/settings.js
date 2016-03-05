var path = require('path');
var settings = {
    env: process.env.NODE_ENV || 'development',
    root: path.normalize(path.join(__dirname, '../../')),
    appRoot: path.normalize(path.join(__dirname, '../')),
    clientRoot: path.normalize(path.join(__dirname, '../client')),
    serverRoot: path.normalize(__dirname),
    port: process.env.PORT || 3000,
    secrets: {
        session: ''
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = settings;
//# sourceMappingURL=settings.js.map