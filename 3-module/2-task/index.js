function filterRange(arr, a, b) {
  const newArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] >= a && arr[index] <= b) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
