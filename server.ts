import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import setRoutes from './src/server/routes/api.routes';

import { AppServerModule } from './src/main.server';
import { existsSync } from 'fs';
import {APP_BASE_HREF} from '@angular/common';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.use((req, res, next) => {
    // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:4201');
    // res.header('Access-Control-Allow-Origin', 'http://192.168.0.9:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  setRoutes(server);
  server.use(require('prerender-node'));
  server.use(compression());

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  const uri = 'mongodb+srv://jancobh:janco23443970@jancobh-vuhbb.mongodb.net/JancoBH?retryWrites=true';
  mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false})
    .then(() => {
      console.log(`Connected to MongoDB in Atlas`);
      // Start up the Node server
      server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
      });

    })
    .catch(err => console.error(err)
    );
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
