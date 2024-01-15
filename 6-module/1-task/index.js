/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let table = document.createElement("table");
    for (let item of rows) {
      let row = table.insertRow();
      let cellName = row.insertCell();
      let cellAge = row.insertCell();
      let cellSalary = row.insertCell();
      let cellCity = row.insertCell();
      let cellCross = row.insertCell();
      cellName.innerHTML = item["name"];
      cellAge.innerHTML = item["age"];
      cellSalary.innerHTML = item["salary"];
      cellCity.innerHTML = item["city"];
      cellCross.innerHTML = `<button>[X]</button>`;
    }
    table.addEventListener("click", function (event) {
      if (event.target.closest("td").innerHTML === `<button>[X]</button>`) {
        event.target.parentNode.parentNode.remove();
      }
    });
    this.elem = table;
  }
}
