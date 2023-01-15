const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];

    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > currentVal) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = currentVal;
  }

  return array;
};
/* 
        [2,1,9,76,4]
        first iteration
        currentVal = array[i](array[1]) = 1 
        j = i - 1  = 0
        array[j](array[0]) = 2
        array[0] > array[1] 
        2 > 1
        then 
              j + 1          j
        array[0 + 1] = array[0]
        after this loop break; j = 0 - 1 = -1
              j  + 1 
        array[-1 + 1] ([0]) = currentVal, array[i], or  1 


    



*/
console.log(insertionSort([2, 1, 9, 76, 4]));
