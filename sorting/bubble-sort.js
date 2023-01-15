const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    let noSwaps = false;
    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;
      if (array[j] > array[j + 1]) {
        //SWAP
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (!noSwaps) {
      break;
    }
  }
}; //коли масив майже відсортований
bubbleSort([8, 1, 2, 3]);
