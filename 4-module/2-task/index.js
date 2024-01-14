function makeDiagonalRed(table) {
  for (n = 0; n < 5; n++) {
    let elem = table.rows[n].cells[n];
    elem.style.backgroundColor = "red";
  }
}
