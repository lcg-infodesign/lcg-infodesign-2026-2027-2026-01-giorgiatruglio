let bolleX = [236, 239, 520, 492, 201, 279, 555, 479];
let bolleY = [543, 613, 553, 614, 663, 661, 609, 668];
let bolleD = [24, 44, 24, 44, 24, 24, 22, 22];   // diametro

function setup() {
  createCanvas(736, 981);
  noStroke();
}

function draw() {
  background(181, 27, 72);
  
  push();
  // Medusa
  fill(236, 190, 246);
  circle(367, 374, 254);
  fill(181, 27, 72);                       
  rect(240, 374, 254, 127);

  // Tentacoli
  fill(224, 220, 255);                      
  rect(292, 374, 38, 251, 0, 0, 19, 19);    // tentacolo 1
  fill(211, 184, 255);                      
  rect(330, 374, 38, 156, 0, 0, 19, 0);     // tentacolo 2
  fill(235, 170, 250);                     
  rect(368, 374, 38, 234, 0, 0, 0, 19);     // tentacolo 3
  fill(224, 220, 255);
  rect(406, 374, 38, 196, 0, 0, 19, 0);     // tentacolo 4

  // Riflesso
  fill(255);
  ellipse(315, 264, 40, 22);

  pop();

  push(); //Bolle
  fill(240, 190, 205);                      // bubble chiare
  circle(236, 543, 24);
  circle(239, 613, 44);
  circle(520, 553, 24);
  circle(492, 614, 44);

  fill(212, 100, 130);                      // bubble scure
  circle(201, 663, 24);
  circle(279, 661, 24);
  circle(555, 609, 22);
  circle(479, 668, 22);

  for (let i = 0; i < 8; i++) {
    if (i < 4) {
      fill(240, 190, 205);
    } else {
      fill(212, 100, 130);
    }
    circle(bolleX[i], bolleY[i], bolleD[i]);
  }
  
  pop();
}
