function getMinMax(str) {
  let arr = str.split(' ').filter((c) => !isNaN(parseInt(c))).map(item => Number(item));

  // Spread (...) — принимает массив и расширяет его на отдельные элементы
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}
