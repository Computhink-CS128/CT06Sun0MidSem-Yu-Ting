//I typed "0" by acident on the tittle its supposed to be "9"

let x = 600
let y = 400
let diameter = 50
function setup(){
 createCanvas(x, y);
 background(220);
}

function draw() {
fill("black");
stroke("red");
strokeWeight(5);

triangle(x/2, y/2-diameter/2, x/2+diameter/2, y/2+diameter/2, x/2-diameter/2,  y/2+diameter/2); 
circle(x/2 -70, y/2, diameter); 
rect(x/2 +diameter, y/2- diameter/2, diameter, diameter);
}
