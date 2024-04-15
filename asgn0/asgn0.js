// Ethan Foster CSE 160 Spring 2024

// where v = vector, color is a string
// uses lineTo() to draw vector
// takes a vector and a color and draws a vector of that color
function drawVector(v, color){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // getting x and y coordinate from vector
    let x = v.elements[0];
    let y = v.elements[1];

    // scaling x and y coordinates of the vector
    x *= 20;
    y *= 20;

    // drawing section
    ctx.beginPath(); // Start a new path
    ctx.moveTo(200, 200); // Move the pen to (0, 0)
    ctx.lineTo(x, y); // Draw a line to (v1.x, v1.y)
    ctx.strokeStyle = color; // expects a string
    ctx.stroke(); // Render the path
}

/*
1. Clear the canvas.
2. Read the values of the text boxes to create v1.
3. Call drawVector(v1, "red") . 
*/
function handleDrawEvent() {
  // canvas section
  const canvas = document.getElementById("canvas"); // initialization of canvas
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height); // resetting to black background

  // create v1
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value); 
  let v1 = new Vector3([x1, y1, 0]);
  
  // create v2
  let x2 = parseFloat(document.getElementById("x2").value); 
  let y2 = parseFloat(document.getElementById("y2").value); 
  let v2 = new Vector3([x2, y2, 0]);
  
  // Draw v1 and v2
  drawVector(v1, "red");
  drawVector(v2, "blue");
}

/*
1. Clear the canvas.
2. Read the values of the text boxes to create v1 and call drawVector(v1, "red") .  
3. Read the values of the text boxes to create v2 and call drawVector(v2, "blue") .  
4. Read the value of the selector and call the respective Vector3 function. For add and sub operations, draw a green vector v3 = v1 + v2  or v3 = v1 - v2. 
5. For mul and div operations, draw two green vectors v3 = v1 * s and v4 = v2 * s.*/
function handleDrawOperationEvent() {
  // canvas section
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // getting vector coordinates
  const x1 = parseFloat(document.getElementById("x1").value);
  const y1 = parseFloat(document.getElementById("y1").value);

  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);

  // create v1 and v2
  let v1 = new Vector3([x1, y1, 0]); 
  let v2 = new Vector3([x2, y2, 0]); 

  // draw v1 and v2
  drawVector(v1, "red");
  drawVector(v2, "blue");

  // read value of selector
  let operation = document.getElementById("selector").value;

  // perform operation
  if (operation === "add") { // addition
    let v3 = v1.add(v2);
    drawVector(v3, "green");
  } else if (operation === "sub") { // subtraction
    let v3 = v1.sub(v2);
    drawVector(v3, "green");
  } else if (operation === "mul") { // multiplication
    let s = parseFloat(document.getElementById("scalar").value);
    let v3 = v1.mul(s);
    let v4 = v2.mul(s);
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (operation === "div") { // division
    let s = parseFloat(document.getElementById("scalar").value);
    let v3 = v1.div(s);
    let v4 = v2.div(s);
    drawVector(v3, "green");
    drawVector(v4, "green");
  } else if (operation === "mag") { // magnitude
    let m1 = v1.magnitude();
    let m2 = v2.magnitude();
    console.log("Magnitude of v1: " + m1);
    console.log("Magnitude of v2: " + m2);
  } else if (operation === "norm") { // normalize
    let n1 = v1.normalize();
    let n2 = v2.normalize();
    drawVector(n1, "green");
    drawVector(n2, "green");
  }
}

/*
uses the dot function to compute the angle between v1 and v2. 
Hint: Use the definition of dot product dot(v1, v2) = ||v1|| * ||v2|| * cos(alpha).
*/
function angleBetween(v1, v2) {
    // gets dot product of v1 and v2
    let dotProduct = v1.dot(v2);
  
    // gets magnitude of v1 and v2
    let magV1 = v1.length();
    let magV2 = v2.length();
  
    // gets the cosine of the angle
    let cos = dotProduct / (magV1 * magV2);
  
    // gets the angle in radians
    let angleRadians = Math.acos(cos);
  
    // converts angle to degrees
    let angleDegrees = angleRadians * (180 / Math.PI);

    // logging angle
    console.log(angleDegrees);
    return angleDegrees;
  }
  

/* 
uses the cross function to compute the area of the triangle created with v1 and v2. 
Hint: Remember  ||v1 x v2]]  equals to the area of the parallelogram that the vectors span.
*/
function areaTriangle(v1, v2) {
  let crossProduct = Vector3.cross(v1, v2); // gets cross product from v1 and v2
  let mag = crossProduct.magnitude(); // gets magnitude of cross product
  let area = 0.5 * mag; // gets area of triangle
  return area;
}

function main() {
    // Retrieve the <canvas> element
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        console .log('Failed to retrieve the <canvas> element ');
        return false;
    }
    // Get the rendering context for 2D CG
    var ctx = canvas.getContext('2d');

    // drawing a red vector
    drawVector(v1, "red");
}