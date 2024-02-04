document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#firstStep').addEventListener('click', function () {
    alert("First step clicked");
    executeScriptInActiveTable(domainByACM)
  })
});

function domainByACM() {
  const domainContainer = document.querySelector(".awsui-table-container")
  console.log("🚀 ~ domainByACM ~ domainContainer:", domainContainer)
  const table = domainContainer.querySelector("table")
  console.log("🚀 ~ domainByACM ~ table:", table)
  const tableDatas = table.querySelectorAll("tr.awsui-table-row")
  console.log("🚀 ~ domainByACM ~ tableDatas:", tableDatas)
  const data = mapTableValues(tableDatas)
  console.log("🚀 ~ domainByACM ~ data:", data)
}

