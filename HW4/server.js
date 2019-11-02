/*
 * Homework 4 (CS 453)
 * ---------------------------
 *
 * The following code stubs are incomplete. Your job is to complete the
 * functions and achieve the desired functionality described in the comments.
 * Please don't change the names of given functions and object properties, as
 * the autograder will treat them as missing and you will get a zero.
 *
 * While completing this assignment, be sure to use Mozilla Developer Network's
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const MONGO_URL = 'mongodb://localhost:27017/ecard-db';

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let db = null;
let collection = null;
var cardId;
/*
 * Complete the startDbAndServer function, which connects to the MongoDB
 * server and creates a Node web server listening to port 3000.
 */
async function startDbAndServer() {
    db = await mongodb.connect(MONGO_URL);
    collection = db.collection('card');
    
    await app.listen(3000);
    console.log('It is on 3000');

};

startDbAndServer();

////////////////////////////////////////////////////////////////////////////////

/*
 * Complete the onSaveCard function, which takes in an HTTP request 'req'.
 * 'req' is sent when _onFormSubmit in "public/js/creator-view.js" is executed. 
 * The request sends 'const params = {style: this.style, message: this.message}'
 * to the Node server.
 * 
 * After receiving the request, the Node server should save it in the 'card' collection
 * in MongoDB and return the document ID as the 'cardID'. 
 *
 * 'res' is the response which contains a json object. 
 */
async function onSaveCard(req, res) {
    const newCard = req.body;
    const response = await collection.insert(newCard, function(err, docsInserted){
    	if (err) return;
    	console.log(docsInserted);
    });
    cardId = newCard._id;
    res.json({ success: true });
    console.log(cardId);
    return cardId;
}	
app.post('/save', jsonParser, onSaveCard);

/*
 * Complete the onGetCard function, which takes in an HTTP request 'req'.
 * 'req' is sent when _loadCard() in "public/js/card-view.js" is executed
 * or when a URL (e.g., http://localhost:3000/id/5bbb8a07ebbf6a9cf4d839f5)
 * is entered in your browser. The request sends a cardID to the Node server.
 * The cardID is also a document ID in MongoDB.
 *
 * After receiving the request, the Node server should search the cardID in
 * the 'card' collection and return the content of the stored document matching
 * the cardID to the browser.
 */ 

async function onGetCard(req, res) {
    const card = req.params;
    console.log(card);
    const result = await collection.findOne(card);
    console.log(result);
    const response = {
    	style: result ? result.style : ''
    };
    res.json(response);
}
app.get('/get/:cardId', onGetCard);

async function onGetCardView(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
}
app.get('*', onGetCardView);
