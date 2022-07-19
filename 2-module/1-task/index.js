function sumSalary(salaries) {
  let sum = 0;

  for (let el in salaries) {
    if (typeof salaries[el] === "number" && !isNaN(salaries[el]) && isFinite(salaries[el])) {
      sum += parseFloat(salaries[el]);
    }
  }
  return sum;
}
