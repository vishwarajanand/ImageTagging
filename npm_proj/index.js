import * as mobilenet from '@tensorflow-models/mobilenet';
const data = require('./data.js');

const image = readImage(path)
// Load the model.
const model = await mobilenet.load();
 
// Classify the image.
const predictions = await model.classify(img); 
console.log('Predictions: ');
console.log(predictions);
