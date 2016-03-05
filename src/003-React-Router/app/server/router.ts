/// <reference path="../interfaces/interfaces.d.ts" />

import * as express from 'express';
import * as path from 'path';
import setting from './settings';
let router = express.Router();

router.get('*', (req: express.Request, res: express.Response) => {
    res.sendfile(setting.clientRoot + '/index.html');
});

export default router;