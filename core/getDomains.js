document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let thisPage = tabs[0].url;
    if (
      !thisPage.includes("/certificates/") ||
      thisPage.includes("/certificates/list")
    ) {
      document.getElementById("firstStep").style.display = "none";
      const result = document.getElementById("result");
      result.style.display = "block";
      result.innerHTML =
        "A aba atual não corresponde a nenhuma etapa de apontamento";
    }
  });

  document.querySelector("#firstStep").addEventListener("click", function () {
    executeScriptInActiveTable(domainByACM);
    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML =
      "Primeira etapa copiada para a sua Área de Transferência";
  });
});

function domainByACM() {
  const domainContainer = document.querySelector(
    '[data-analytics="domainValidationsTable"]'
  );

  console.log("🚀 ~ domainByACM ~ domainContainer:", domainContainer);
  const table = domainContainer.querySelector("table");
  console.log("🚀 ~ domainByACM ~ table:", table);
  const tableDatas = table.querySelectorAll("tr");
  console.log("🚀 ~ domainByACM ~ tableDatas:", tableDatas);
  const data = mapTableValues(tableDatas);
  console.log("🚀 ~ domainByACM ~ data:", data);
  console.log(
    "🚀 ~ domainByACM ~ generateFirstStep(data):",
    generateFirstStep(data)
  );

  const textarea = document.createElement("textarea");
  textarea.value = generateFirstStep(data);
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
