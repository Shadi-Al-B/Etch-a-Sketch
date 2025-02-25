const container = document.querySelector(".main-container");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let input;
  do {
    input = prompt("Enter Grid Size:");
    if (input >= 100) {
      input = prompt("Grid Size Should be Less than a 100, Enter Grid Size:");
    }
  } while (input > 100);

  createGrid(input);
});

function createGrid(size = 16) {
  // Clear existing grid
  container.innerHTML = "";

  // Create columns
  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");

    // Create rows
    for (let j = 0; j < size; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.addEventListener("mouseenter", function () {
        row.classList.add("hover");
      });
      row.addEventListener("mouseleave", function () {
        row.classList.remove("hover");
      });

      column.appendChild(row);
    }

    container.appendChild(column);
  }
}
