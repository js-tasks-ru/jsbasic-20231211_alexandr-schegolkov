function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == "number") {
      if (isFinite(salaries[key])) {
        sum = sum + salaries[key];
      }
    }
  }
  return sum;
}
