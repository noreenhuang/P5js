let particles = [];

//Create many arrays with different types of data represented
let numbers = [1, 2, 3, 4, 5];
let numbers1 = [1, 2, 3, 4, 5];
let strings = ["one", "two", "three", "four", "five"];
let booleans = [true, false, true, false, true];
let mixed = [1, "two", true, 4, "five"];
let a = 0;
let s = 0;




//Work with the HTMLElements array in the DOM
function handleClick(i) {
  if (i === "button2") {
    particles.pop();
  }
  if (i === "button1") {
    particles.push({
      x: random(width),
      y: random(height),
      radius: random(10, 20),
      color: color(random(255), random(255), random(255))
    });

  }
}

const button1 = document.getElementById('button1');

button1.addEventListener('click', function () {
  handleClick("button1");
});
const button2 = document.getElementById('button2');
button2.addEventListener('click', function () {
  handleClick("button2");
});





function setup() {
  createCanvas(1500, 700);

  // Create some particles
  for (let i = 0; i < 10; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      radius: random(10, 20),
      color: color(random(255), random(255), random(255))
    });
  }
}


function draw() {
  background(192, 192, 192);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    // 
    fill(p.color);
    ellipse(p.x, p.y, p.radius, p.radius);
    p.x += random(-2, 2);
    p.y += random(-2, 2);
  }

  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    fill(255, 255, 0);
    textSize(20);
    text(n, 10  + random(-1, 1), 20 + i * 20 + random(-1, 1));
  }
  for (let i = 0; i < strings.length; i++) {
    let s = strings[i];
    fill(0, 255, 0);
    textSize(30);
    // text(s, 100, 10 + i * 20);
    text(s, 100 * (i + 1) + random(-1, 1), 20 + i * (i + 1) * 20 + random(-1, 1));
  }
  for (let i = 0; i < booleans.length; i++) {
    let b = booleans[i];
    fill(255, 0, 0);
    // text(b, 200, 10 + i * 20);
    text(b, 200 * (i + 1) + random(-1, 1), 20 + i * (i + 1) * 20 + random(-1, 1));
  }
  for (let i = 0; i < mixed.length; i++) {
    let m = mixed[i];
    fill(10, 10, 255);
    // text(m, 300, 20 + i * 20);
    text(m, 300 * (i + 1) + random(-1, 1), 20 + i * (i + 1) * 20 + random(-1, 1));
  }

}
function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    particles.push({
      x: mouseX,
      y: mouseY,
      radius: random(10, 20),
      color: color(random(255), random(255), random(255))
    });
  }
    

}

function keyPressed() {
  if (keyCode === DELETE) {
    particles.pop();
  }
  if (keyCode === BACKSPACE) {
    particles.pop();
  }
  if (keyCode === 65) {
    if (a === 0) {
      numbers = numbers.concat(numbers1);
      a = 1;
    } else {
      numbers = numbers.slice(0, 5);
      a = 0;
    }
  }
  if (keyCode === 83) {
    if (s === 0) {
      strings = strings.join();
      s = 1;
    } else {
      strings = ["one", "two", "three", "four", "five"]
      s = 0;
    }
  }
}

