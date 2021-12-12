var x = 260;
var y = 0;
var cowhead = 50;

var ufoX = 260;
var ufoY = 50;
var ufoBase = 130;

var cloudX = 50;
var cloudY = 100;
var cloudCore = 100;

var cloudX1 = 500;
var cloudY1 = 300;
var cloudCore1 = 150;

// you will see setup and draw is not definied or used warnings and other warnings in your console at the bottom right. This is a glitch in how codesandbox loads the libraries and methods from p5. All is well.
function setup() {
  createCanvas(700, 700);
}

function moveCow() {
  var speed = 1;
  Y = Y + speed;
  if (Y < 550) {
    speed = +10;
  }
  if (Y > 100) {
    speed = -10;
  }
}

draw = function () {
  background(35, 41, 122);

  //stars
  fill(255, 255, 255, 255);

  var starX = 20;
  while (starX < 700) {
    ellipse(starX, 30, 5, 5);
    starX += 158;
  }

  var starX1 = 60;
  while (starX1 < 700) {
    ellipse(starX1, 150, 5, 5);
    starX1 += 100;
  }

  var starX2 = 60;
  while (starX2 < 700) {
    ellipse(starX2, 250, 5, 5);
    starX2 += 150;
  }

  var starX3 = 60;
  while (starX3 < 700) {
    ellipse(starX3, 350, 5, 5);
    starX3 += 200;
  }
  fill(192, 192, 192);

  //clouds
  ellipse(cloudX, cloudY, (cloudCore * 5) / 6, (cloudCore * 5) / 6);
  ellipse(
    cloudX + (4 / 4) * cloudCore,
    cloudY,
    (cloudCore * 5) / 6,
    (cloudCore * 5) / 6
  );
  ellipse(cloudX + (1 / 2) * cloudCore, cloudY, cloudCore, cloudCore);

  ellipse(cloudX1, cloudY1, (cloudCore1 * 5) / 6, (cloudCore1 * 5) / 6);
  ellipse(
    cloudX1 + (4 / 4) * cloudCore1,
    cloudY1,
    (cloudCore1 * 5) / 6,
    (cloudCore1 * 5) / 6
  );
  ellipse(cloudX1 + (1 / 2) * cloudCore1, cloudY1, cloudCore1, cloudCore1);

  //grass
  fill(0, 100, 0); //dark green
  rect(1, 450, 700, 700); //grass

  //moon
  fill(255, 248, 220);
  rect(550, 10, 100, 100); //moon

  //UFO
  triangle(170, 650, 350, 50, 550, 650); //light from UFO
  fill(255, 255, 255, 255); // glass color
  ellipse(
    ufoX + (18 / 24) * ufoBase,
    ufoY + (20 / 30) * ufoBase,
    (ufoBase * 150) / 50,
    ufoBase
  ); //bass on UFO
  fill(0, 105, 0);
  arc(
    ufoX + (18 / 25.5) * ufoBase,
    ufoY + (18 / 35) * ufoBase,
    (ufoBase * 40) / 25,
    (ufoBase * 40) / 28,
    3.1,
    6.3
  ); // glass part of ufo

  // cow  parts lol
  fill(255, 248, 220);
  rect(
    x + (6 / 4) * cowhead,
    y + (7 / 6.3) * cowhead,
    cowhead / 6,
    cowhead / 3
  );
  // hornL
  rect(
    x + (6 / 8.5) * cowhead,
    y + (7 / 6.3) * cowhead,
    cowhead / 6,
    cowhead / 3
  );
  // hornR
  fill(255, 255, 255, 255);
  rect(
    x + (26 / 9) * cowhead,
    y + (18.5 / 9) * cowhead,
    (cowhead * 4) / 9,
    (cowhead * 2) / 9
  );
  //tail
  rect(
    x + (6 / 9) * cowhead,
    y + (27.5 / 9) * cowhead,
    (cowhead * 2.5) / 9,
    (cowhead * 5) / 9
  );
  //leg1
  rect(
    x + (11 / 9) * cowhead,
    y + (27.5 / 9) * cowhead,
    (cowhead * 2.5) / 9,
    (cowhead * 5) / 9
  );
  //leg2
  fill(255, 255, 255, 255);
  rect(
    x + (17.5 / 9) * cowhead,
    y + (27.5 / 9) * cowhead,
    (cowhead * 2.5) / 9,
    (cowhead * 5) / 9
  );
  //leg3
  fill(255, 192, 203); //pink
  ellipse(
    x + (20 / 9) * cowhead,
    y + (28 / 9) * cowhead,
    (cowhead * 8) / 9,
    (cowhead * 5.5) / 9
  );
  //uterrrr
  fill(255, 255, 255, 255);
  rect(
    x + (22.5 / 9) * cowhead,
    y + (27.5 / 9) * cowhead,
    (cowhead * 2.5) / 9,
    (cowhead * 5) / 9
  );
  //leg4
  fill(255, 255, 255, 255); //white
  rect(
    x + (2 / 3) * cowhead,
    y + (18.5 / 9) * cowhead,
    (cowhead * 20) / 9,
    (cowhead * 9) / 9
  );
  //body
  fill(255, 255, 255, 255); //white
  rect(x + (6 / 9) * cowhead, y + (12.5 / 9) * cowhead, cowhead, cowhead); //head
  rect(
    x + (4 / 9) * cowhead,
    y + (12.5 / 9) * cowhead,
    cowhead / 3,
    cowhead / 3
  );
  //earR
  rect(
    x + (13 / 9) * cowhead,
    y + (12.5 / 9) * cowhead,
    cowhead / 3,
    cowhead / 3
  );
  //earL
  fill(255, 192, 203); //pink
  ellipse(
    x + (10 / 9) * cowhead,
    y + (19 / 9) * cowhead,
    (cowhead * 8) / 9,
    (cowhead * 5.5) / 9
  );

  function myFunction() {
    // var speed = 1;
    // Y = Y + speed;
    // if (Y < 550) {
    //   speed = +10;
    // }
    // if (Y > 100) {
    //   speed = -10;
    // }
    alert("Page is loaded");
  }
};
