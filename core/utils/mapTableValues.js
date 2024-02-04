function mapTableValues(tableRows) {
  const mappedData = [];
  tableRows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    const cellValues = [];
    cells.forEach((cell) => {
      cellValues.push(cell.textContent.trim());
    });
    mappedData.push(cellValues);
  });
  return mappedData;
}
