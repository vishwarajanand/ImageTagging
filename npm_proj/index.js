import * as mobilenet from '@tensorflow-models/mobilenet';
var data = require('./data.js');
data = data.data;

const image = readImage(data[0].url)
// Load the model.
// const model = await mobilenet.load();
 
// Classify the image.
// const predictions = await model.classify(img); 
console.log('Predictions: ');
// console.log(predictions);
