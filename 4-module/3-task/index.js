function highlight(table) {
  let elemStatus;
  let elemGender;
  let elemAge;
  for (i = 1; i < 6; i++) {
    elemStatus = table.rows[i].cells[3];
    elemGender = table.rows[i].cells[2];
    elemAge = table.rows[i].cells[1];
    if (elemStatus.getAttribute("data-available") == "true") {
      // elemStatus.classList.add("available");
      table.rows[i].classList.add("available");
    } else if (elemStatus.getAttribute("data-available") == null) {
      // elemStatus.classList.add("unavailable");
      // elemStatus.setAttribute("hidden", "hidden");

      table.rows[i].setAttribute("hidden", "hidden");
    } else {
      table.rows[i].classList.add("unavailable");
    }

    if (elemGender.innerHTML == "m") {
      // elemGender.classList.add("male");
      table.rows[i].classList.add("male");
    } else {
      // elemGender.classList.add("female");
      table.rows[i].classList.add("female");
    }

    if (elemAge.innerHTML < 18) {
      // elemAge.style = "text-decoration: line-through";
      table.rows[i].style = "text-decoration: line-through";
    }
  }
  return;
}
