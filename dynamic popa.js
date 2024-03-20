// Assuming you have an element with an ID 'image' that contains an image 

// Get the image element
const imageElement = document.getElementById('image');

// Create a canvas element
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Set the canvas size to match the image
canvas.width = imageElement.width;
canvas.height = imageElement.height;

// Draw the image onto the canvas
context.drawImage(imageElement, 0, 0);

// Get the average color of the image
const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data;
let sumRed = 0;
let sumGreen = 0;
let sumBlue = 0;

for (let i = 0; i < data.length; i += 4) {
  sumRed += data[i];
  sumGreen += data[i + 1];
  sumBlue += data[i + 2];
}

const avgRed = Math.floor(sumRed / (data.length / 4));
const avgGreen = Math.floor(sumGreen / (data.length / 4));
const avgBlue = Math.floor(sumBlue / (data.length / 4));

// Change the background color of the page
document.body.style.backgroundColor = rgb(${avgRed}, ${avgGreen}, ${avgBlue});