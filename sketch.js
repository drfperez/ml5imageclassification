// Image Classification with MobileNet
// A Beginner's Guide to Machine Learning with ml5.js
// The Coding Train / Daniel Shiffman
// https://youtu.be/yNkAuWz5lnY
// https://thecodingtrain.com/learning/ml5/1.1-image-classification.html
// https://editor.p5js.org/codingtrain/sketches/qFZF7iDe

let mobilenet;
let puffin;

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].className;
    let prob1 = results[0].probability;
    let label2 = results[1].className;
    let prob21 = results[1].probability;
    
    //round(x,4) 
    let prob = precise(prob1,2)
    let prob2 = precise(prob21,2)
    fill(0);
    textSize(32) ;
    text(label, 10, height - 50);
  
    createP("According to mobilnet this image contains a"+label+" with the highest probability of "+prob);
     createP("A second possibility is "+label2+" with the a probability of "+prob2);
  }
}
function precise(x) {
  return 100*Number.parseFloat(x).toPrecision(4)+" %";
}



function imageReady() {
  image(puffin, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg('images/joe.jpg', imageReady);
  puffin.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
