class CanvasArray {
  constructor(context, canvas, size=100) {
    this.size = size;
    this.array = [];

    this.context = context
    this.canvas = canvas
  };

  displayArray(cleared=false) {
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (cleared==true) {
      context.fillStyle = "green";
    } else {
      context.fillStyle = "black";
    };
    this.array.forEach(function (item, index) {
      context.fillRect(100+index*8, 0, 6, item*4)
    });
  };

  randomizeArray() {
    let temp = [];
    let i;
    for (i = 0; i < this.size; i++) {
      temp.push(i + 30);
    };
    let len = this.size;
    this.array = [];
    for (i = 0; i < this.size; i++) {
      let element = temp[Math.floor(Math.random()*len)];
      temp.splice(temp.indexOf(element), 1);
      this.array.push(element);
      len--;
    };
    this.displayArray();
  };

  resizeArray(size) {
    this.size = size;
    this.randomizeArray();

  };

  async bubbleSort() {
    let swap = true;
    while (swap==true) {
      swap = false;
      let i;
      for (i = 0; i < this.size-1; i++) {
        if (this.array[i] > this.array[i+1]) {
          let x = this.array[i], y = this.array[i+1];
          this.array[i] = y;
          this.array[i+1] = x;
          swap = true;
          await sleep(10);
        this.displayArray();
        };
      };

    };
    let cleared = true
    this.displayArray(cleared);
  };

  heapSort() {}

  mergeSort() {}

  quickSort() {}
};
