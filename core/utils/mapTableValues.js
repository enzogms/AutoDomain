(() => {
  function mapTableValues(tableRows) {
    const mappedData = [];
    tableRows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      if (cells.length === 0) return;
      const cellValues = [];
      cells.forEach((cell) => {
        cellValues.push(cell.textContent.trim());
      });
      mappedData.push(cellValues);
    });
    return mappedData;
  }
  self.mapTableValues = mapTableValues;
})();
