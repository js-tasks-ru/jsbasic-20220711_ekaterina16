// Способ #1
function camelize(str) {
  return str.split('-')
    .map((word, index) => index !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
    .join('');
}

// Способ #2
/*
function camelize(str) {

  const splitArr = str.split('-');
  const newArr = [];

  for (let index = 1; index < splitArr.length; index += 1) {
    newArr.push(splitArr[index].charAt(0).toUpperCase() + splitArr[index].slice(1));
  }

  return splitArr[0] + newArr.join("");
}
*/
