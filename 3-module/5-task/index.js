function getMinMax(str) {
  let arr = str.split(' ').filter((c) => !isNaN(parseInt(c))).map(function(item) {
    return Number(item);
  });

  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}
