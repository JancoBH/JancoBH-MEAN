import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as compression from 'compression';
import {join} from 'path';
import setRoutes from './src/server/routes/api.routes';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  // res.header('Access-Control-Allow-Origin', 'http://localhost:4201');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


setRoutes(app);
app.use(require('prerender-node'));
app.use(compression());

app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1d'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});
// Start up the Node server && MongoDB
// F4Ul15eut9ohc2Mz
const uri = 'mongodb+srv://jancobh:janco23443970@jancobh-vuhbb.mongodb.net/JancoBH?retryWrites=true';
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to MongoDB in Atlas`);
    // Start up the Node server
    app.listen(PORT, () => {
      console.log(`Node Express server listening on http://localhost:${PORT}`);
    });

  })
  .catch(err => console.error(err)
  );
