const pifagorTable = document.querySelector("#pifagorContainer")

function createTable (size) {
    const table = document.createElement("table");
    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            cell.classList.add("cellStyle")
            cell.textContent = (i + 1) * (j + 1);

            if (j === i || i === 0 || j === 0) {
                cell.classList.add("cellLight", "bold")
            } else {
                cell.classList.add("cellDark")
            }


            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    pifagorTable.appendChild(table);
}
createTable(10)

