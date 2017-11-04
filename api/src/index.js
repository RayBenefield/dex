import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

const config = functions.config();
admin.initializeApp(config.firebase);

exports.hello = functions.https.onRequest((req, res) => res.sendStatus(200));
