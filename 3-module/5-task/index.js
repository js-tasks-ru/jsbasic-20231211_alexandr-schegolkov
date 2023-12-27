function getMinMax(str) {
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = Number(str[i]);
    if (Number.isFinite(str[i])) {
    } else {
      str.splice(i, 1);
    }
  }

  let result = {
    min: Math.min.apply(null, str),
    max: Math.max.apply(null, str),
  };

  return result;
}
