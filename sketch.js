// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let urls = [
    'http://media.expedia.com/hotels/1000000/590000/580300/580269/9911d26c_z.jpg',
    'http://media.expedia.com/hotels/1000000/590000/580300/580269/5dfa4780_z.jpg',
    'http://media.expedia.com/hotels/1000000/590000/580300/580269/01343210_z.jpg',
    'http://media.expedia.com/hotels/1000000/590000/580300/580269/04585ca6_z.jpg',
    'http://media.expedia.com/hotels/1000000/590000/580300/580269/cdd63300_z.jpg',
  ];
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  var max = urls.length - 1;
  var min = 0;
  var random = Math.floor(Math.random() * (+max - +min)) + +min
  img = loadImage(urls[random]);
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    createDiv('Label: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
  }
}
