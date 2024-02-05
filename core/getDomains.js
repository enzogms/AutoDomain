document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    let thisPage = tabs[0].url;
    if (!thisPage.includes("/certificates/") || thisPage.includes("/certificates/list")) {
      document.getElementById("firstStep").style.display = "none";
    }
  });

  document.querySelector('#firstStep').addEventListener('click', function () {
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
  console.log("🚀 ~ domainByACM ~ generateFirstStep(data):", generateFirstStep(data))

  const textarea = document.createElement('textarea');
  textarea.value = generateFirstStep(data);
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

