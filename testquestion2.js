let x = 600
let y = 400
let diameter = 30

function setup(){
 createCanvas(x, y);
 background(220);
}

function draw() {
for (let i = 1; i < 11; i++) {
fill(20*i,0,0);
circle(diameter*i, diameter*i, diameter); 
}
}



