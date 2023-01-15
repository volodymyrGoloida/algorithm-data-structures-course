function binarySearch(sortedArray, value) {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;

  while (leftPointer < rightPointer) {
    let middleValueIndex = Math.round((leftPointer + rightPointer) / 2);
    if (sortedArray[middleValueIndex] === value) {
      return middleValueIndex;
    } else if (sortedArray[middleValueIndex] > value) {
      rightPointer = middleValueIndex;
    } else if (sortedArray[middleValueIndex] < value) {
      leftPointer = middleValueIndex;
    }
  }
  return -1;
}

let b = binarySearch([1, 2, 3, 4, 5], 5);
binarySearch([1, 2, 3, 4, 5], 6);
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(b);
