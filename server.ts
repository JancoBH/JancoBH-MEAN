import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as mongodb from 'mongodb';
import {join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
const ObjectID = mongodb.ObjectID;

const PORT = process.env.PORT || 4000;
const DB = process.env.MONGODB_URI || 'mongodb://heroku_863442xw:r6fa3as9ig2a2ng4omvccr5fnb@ds141815.mlab.com:41815/heroku_863442xw';
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

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server && MongoDB

let db;

mongodb.MongoClient.connect(DB, (err, client) => {

  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = client.db();
  console.log('Database connection ready');

  app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
  });
});

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code?) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({error: message});
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get('/api/tutoriales', (req, res) => {
  db.collection('tutoriales').find({}).toArray((err, docs) => {
    if (err) {
      handleError(res, err.message, 'Failed to get contacts.');
    } else {
      res.status(200).json(docs);
    }
  });
});

