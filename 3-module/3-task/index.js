function camelize(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      let x = i + 1;
      arr[x] = arr[x].toUpperCase();
      arr.splice(i, 1);
    }
  }
  arr = arr.join("");
  return arr;
}
