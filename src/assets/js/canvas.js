function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomize() {
  canvasarr.randomizeArray()
};

function sort(algorithm) {
  canvasarr.bubbleSort()
};

function resize(size) {
  canvasarr.resizeArray(size)
};

//Main Program
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

//Resizing
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Generate random array
const canvasarr = new CanvasArray(context, canvas);
canvasarr.randomizeArray()