const WASH_MACHINE_PERCENT = 11;
const SHOWER_PERCENT = 14;
const TUB_PERCENT = 15;
const TOILET_PERCENT = 28;
const TAP_PERCENT = 32;

const ICON_SIZE = 50;
const BASE_Y_LOCATION = 450;

let washMachineObject;
let showerObject;
let tubObject;
let toiletObject;
let tapObject;

let imageShower;
let imgToilet;
let imgTub;
let imgTap;
let imgWashMachine;

let canvas;

// Load the image.
function preload() {
  imgWashMachine = loadImage("https://drive.usercontent.google.com/download?id=1Q0oARsnHwWWxT-3U3expupSgo-2udy7e");
  imgToilet = loadImage("https://drive.usercontent.google.com/download?id=1sS3COBKyc_nHiy02Jh3-YlUiKSrEReDX");
  imgShower = loadImage("https://drive.usercontent.google.com/download?id=1xxQFN2-lcH_KaNzReB_9MFHJT603SN57");
  imgTap = loadImage("https://drive.usercontent.google.com/download?id=1YX1v7fnGV3wKkNceFaIz1JzmP3y5JuEU");
  imgTub = loadImage("https://drive.usercontent.google.com/download?id=1fPwkl5ogUjhoKLTS3eWj9svix2fq99_y");

}

function setup() {
  canvas = createCanvas(512, 512);

  washMachineObject = {
    name: "Washing Machine",
    theImage: imgWashMachine,
    percent: WASH_MACHINE_PERCENT,
    xPosition: 50,
    numberIcons: 2.2,
  };
  showerObject = {
    name: "Shower",
    theImage: imgShower,
    percent: SHOWER_PERCENT,
    xPosition: 130,
    numberIcons: 2.8,
  };
  tubObject = {
    name: "Bathtub",
    theImage: imgTub,
    percent: TUB_PERCENT,
    xPosition: 210,
    numberIcons: 3,
  };
  toiletObject = {
    name: "Toilet",
    theImage: imgToilet,
    percent: TOILET_PERCENT,
    xPosition: 290,
    numberIcons: 5.6,
  };
  tapObject = {
    name: "Tap",
    theImage: imgTap,
    percent: TAP_PERCENT,
    xPosition: 370,
    numberIcons: 6.4,
  };

  noLoop();
}

function draw() {
  //Light Silver background
  background(217, 217, 217);
  textSize(25);
  text("%", 30, 30);
  strokeWeight(3);
  stroke("black");

  line(40, 50, 40, 450);
  line(40, 450, 440, 450);

  for (i = 400; i >= 50; i -= 50) {
    line(35, i, 45, i);
  }

  let percentageLabel = 0;
  strokeWeight(0);

  textAlign(CENTER);
  textSize(18);
  for (j = 450; j >= 50; j -= 100) {
    text(percentageLabel, 12, j + 7);
    percentageLabel += 10;
  }

  drawImages(washMachineObject);
  drawImages(showerObject);
  drawImages(tubObject);
  drawImages(toiletObject);
  drawImages(tapObject);

  textSize(22);
  fill("black");

  textStyle(BOLD);
}

function drawImages(category) {
  if (over(category)) {
    print("Worked");
    tint(175, 180);
    fill("black");
    stroke("yellow");
    strokeWeight(3);
    textAlign(CENTER);
    textSize(26);
    text(
      category.name + " : " + category.percent + " %",
      width / 2,
      height - 25
    );
  } else {
    noTint();
  }
  let yPosition = 400;
  for (i = 0; i < Math.floor(category.numberIcons); i++) {
    image(
      category.theImage,
      category.xPosition,
      yPosition,
      ICON_SIZE,
      ICON_SIZE
    );
    yPosition -= 50;
  }
  partialIconPercent = category.numberIcons - Math.floor(category.numberIcons);
  roundedPercentage = Math.round(partialIconPercent * 10) / 10;
  if (roundedPercentage >= 0.1) {
    image(
      category.theImage,
      category.xPosition,
      yPosition,
      ICON_SIZE,
      ICON_SIZE
    );
    strokeWeight(0);
    fill(217, 217, 217);
    rect(
      category.xPosition,
      yPosition,
      ICON_SIZE,
      ICON_SIZE * (1 - roundedPercentage)
    );
  }
  for (i = 400; i >= 50; i -= 50) {
    stroke("#7393B3");
    strokeWeight(1);
    line(45, i, 440, i);
  }

  loop();
}

function over(category) {
  if (
    mouseX > category.xPosition &&
    mouseX < category.xPosition + ICON_SIZE &&
    mouseY > BASE_Y_LOCATION - ICON_SIZE * category.numberIcons &&
    mouseY < BASE_Y_LOCATION
  ) {
    print("Worked true");

    return true;
  } else {
    print("Worked false");

    return false;
  }
}
