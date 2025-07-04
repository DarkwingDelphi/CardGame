let hand = [
  { id: 1, name: "Glowseed", description: "Plant an alien crop.", color: "#4caf50" },
  { id: 2, name: "Rainstorm", description: "Grow all crops faster.", color: "#2196f3" },
  { id: 3, name: "Meteor Dust", description: "Enrich the soil.", color: "#ff9800" }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  let cardWidth = 120;
  let cardHeight = 180;
  let spacing = 20;

  for (let i = 0; i < hand.length; i++) {
    let x = spacing + i * (cardWidth + spacing);
    let y = height - cardHeight - 40;

    // Card background
    fill(hand[i].color);
    rect(x, y, cardWidth, cardHeight, 10);

    // Card name
    fill(255);
    textSize(14);
    textAlign(CENTER, TOP);
    text(hand[i].name, x + cardWidth / 2, y + 10);

    // Card description
    textSize(10);
    text(hand[i].description, x + cardWidth / 2, y + 30, cardWidth - 10);
  }
}

function mousePressed() {
  let cardWidth = 120;
  let cardHeight = 180;
  let spacing = 20;

  for (let i = 0; i < hand.length; i++) {
    let x = spacing + i * (cardWidth + spacing);
    let y = height - cardHeight - 40;

    if (mouseX > x && mouseX < x + cardWidth && mouseY > y && mouseY < y + cardHeight) {
      console.log("Clicked card:", hand[i].name);
      hand.splice(i, 1); // remove it
      break;
    }
  }
}
