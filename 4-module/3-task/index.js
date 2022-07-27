function highlight(table) {
  let cells = table.querySelectorAll('td');

  /**
   * Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status.
   * Если её значение true – класс available, если её значение false – класс unavailable.
   */
  cells.forEach(cell => {
    let row = cell.closest('tr');

    if (cell.dataset.available === 'true') {
      row.classList.add('available');
    } else if (cell.dataset.available === 'false') {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }
  });

  // Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
  cells.forEach(cell => {
    let row = cell.closest('tr');

    if (cell.textContent < 18) {
      row.style.textDecoration = "line-through";
    }
  });

  //Проставить класс male/female в зависимости от содержимого ячейки Gender.
  // Если её значение m – класс male, Если её значение f – класс female.
  cells.forEach(cell => {
    let row = cell.closest('tr');

    if (cell.textContent === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }
  });
}
