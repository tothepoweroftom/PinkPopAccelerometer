/*
 * @name Acceleration Color
 * @description Use deviceMoved() to detect when the device is rotated. The background RGB color values are mapped to accelerationX, accelerationY, and accelerationZ values.  
 */

var r, g, b;
var waveform = [];
function setup() {
  createCanvas(displayWidth, displayHeight);
  r = random(50, 255);
  g = random(0, 200);
  b = random(50, 255);
  
  for (var i=0; i< displayWidth; i++) {
    waveform.push(0.0);
  }
}

function draw() {
  background(r, g, b);
  text("AccelerationX: " + String(accelerationX), 20, 20);
    text("AccelerationY: " + String(accelerationY), 20, 40);
  text("AccelerationZ: " + String(accelerationY), 20, 60);
  
  for (var i = 0; i<waveform.length; i++){
    if (i == waveform.length-1) {
      waveform[i] = (accelerationX+accelerationY+accelerationZ)/100;
    } else {
      waveform[i] = waveform[i+1];
    }
  }
  
  drawWaveform();

  
}

function deviceMoved() {   
    // r = map(accelerationX, -1, 1, 100, 175);
    // g = map(accelerationY, -1, 1, 100, 200);
    // b = map(accelerationZ, -1, 1, 100, 200);   
}


function drawWaveform() {
    // draw the shape of the waveform
  stroke(255);
  noFill();
  strokeWeight(1);
  beginShape();
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, -height/2, height/2);
    vertex(x, y + height/2);
  }
  endShape();
}


