// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;
// A variable to hold which image in data array is being classified
let dataid = 0;
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  var max = data.length - 1;
  var min = 0;
  dataid = Math.floor(Math.random() * (+max - +min)) + +min;
  img = loadImage(data[dataid]["url"]);
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
    createDiv('Actual Labels: ' + data[dataid]["tag"]);
    createDiv('Derived Labels: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
    createDiv('Credits: <a href="' + data[dataid]["url"] + '">URL</a>');
  }
}
