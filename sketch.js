function setup() {
	createCanvas(150, 100);

	}

function draw() {
	star0()
	star1()
	star2()
	star3()
	}
	

function star0() {
	push()
 	translate(25, 50);
	star(0, 0, 5, 10, 5);
	pop()
	
	if ((mouseX > 25) && (mouseX < 150) && (mouseY > 25) && (mouseY < 75)) {
    fill('#FFFF00');
}
	  else {
    fill(255);
  }
}


function star1() {
push()
	translate(50, 50);
	star(0, 0, 5, 10, 5);
	pop()
	
	if ((mouseX > 50) && (mouseX < 150 )&& (mouseY > 25) && (mouseY < 75)) {
    fill('#FFFF00');
  }
  else {
    fill(255);
  }
}
	


function star2() {
	push()
	translate(75, 50);
	star(0, 0, 5, 10, 5);
	pop()
	if ((mouseX > 75) && (mouseX < 150)&& (mouseY > 25) && (mouseY < 75)) {
    fill('#FFFF00');
}
	  else {
    fill(255);
  }
}

function star3() {
	push()
	translate(100, 50);
	star(0, 0, 5, 10, 5);
	pop()
	if ((mouseX > 100) && (mouseX < 150)&& (mouseY > 25) && (mouseY < 75)) {
    fill('#FFFF00');
}
	  else {
    fill(255);
  }
}

function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints;
	let halfAngle = angle / 2.0;
	beginShape();
	for (let a = .95; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
	}