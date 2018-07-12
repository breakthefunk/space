stars = []
stars.length = 400;

function preload()  {
//img = loadImage('nebula.jpg');
}

function setup(){
  createCanvas(windowWidth-20, windowHeight-20);
	for (i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  for (i = 0; i  < stars.length; i++) {
    stars[i].show();
  }
  if(frameCount % 250 == 0 ){
		randomStar = random(stars); 
		randomStar.shoot();
  
  }
}

class Star {
	constructor() {
		this.star();
    this.show();
 
 	 	}
  	star() {
      this.x = random(width, 0);
      this.y = random(height, 0);
      this.alpha = 255;
      this.xmove = 0;
      this.ymove = 0;
      this.shift = floor(random(1,111)); //1 - red; 2 - blue; 3 - none
      if (this.shift >= 1 && this.shift < 4) {
      	this.shift = 1;
      	this.r = random(2, 4);
        this.alpha = 125;
      }
      else if (this.shift >= 5 && this.shift < 7) {
        this.shift = 2;
        this.r = random(3, 5);
        this.alpha = 225;
      }
      else if (this.shift > 6 && this.shift >= 10) {
        this.shift = 3;
        this.r = random(1, 5);
        this.alpha = 200;
      }
      else
      console.log ("shift assignment error");
  	}
  	show() {
      console.log(this.shift);
      if (this.shift == 1) {
        if (random(1) < 0.003 ) {
					red 	= floor(random(0,255));
					green 	= 0;
					blue 	= 0;
        }
        else {
					red = 255;
					green = 100;
					blue = 100;
        }
      }
			else if (this.shift == 2) {
        if (random(1) < 0.003 ) {
					red 	= 0;
					green 	= 0;
					blue 	= floor(random(0,255));
        }
        else {
					red = 100;
					green = 150;
					blue = 200;
        }
      }
      else if (this.shift == 3) {
        if (random(1) < 0.003 ) {
					red = floor(random(0,125));
					green = floor(random(0,125));
					blue = floor(random(0,125));
        }
        else {
					red = 225;
					green = 225;
					blue = 225;
        }
    	}
			fill(red, green, blue,this.alpha);
  		noStroke();
			ellipse(this.x, this.y, this.r, this.r);
  	}
  	shoot() {
    	console.log("shot");
			this.shooting = true;
			this.xmove = random(-20,20);
			this.ymove = random(-20,20);
    }
}
