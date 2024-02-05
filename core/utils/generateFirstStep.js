function generateFirstStep(arrays) {
  let message = "";
  message += "```\n"

  // Itera sobre cada array no array principal
  arrays.forEach((array) => {
    const domain = array[0];

    //ignora dominios com Wildcard
    if (domain.startsWith("*.")) return;

    const recordType = array[3];
    const name = normalizeValue(array[4]);
    const value = normalizeValue(array[5]);

    // Adiciona os elementos desejados à mensagem
    message += `${domain}\n`;
    message += `Tipo: ${recordType}\n`;
    message += `Nome: ${name.replace(domain + ".", "").replace(/\.$/, "")}\n`;
    message += `Valor: ${value}\n\n`;
  });
  message += `OBS: O valor deve ser adicionado com o "." ponto final.\n`
  message += "```"
  return message;
}

function normalizeValue(value) {
  const normalizedValue = value.replace("Copiado para a área de transferência\n                                \n                            \n                    \n                    ", "");
  return normalizedValue.trim();
}
