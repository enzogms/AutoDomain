# AutoDomain - Extensão do Google Chrome

## Descrição

O AutoDomain é uma extensão que simplifica e automatiza as etapas do processo de apontamento de domínio na AWS. Com foco na praticidade, a extensão visa facilitar o retorno das demandas de apontamento, tornando o processo mais eficiente e rápido.

## Instalação

Como a extensão não está disponível na Chrome Web Store, a instalação deve ser feita manualmente. Siga os passos abaixo:

1. Baixe o código-fonte do repositório do projeto.
2. Abra o seu Google Chrome.
3. Vá em `Mais Ferramentas` -> `Extensões`.
4. Ative o modo desenvolvedor.
5. Clique em "Carregar sem compactação", escolha a pasta onde você salvou o código fonte e pronto! A extensão estará instalada e pronta para uso.

## Como Contribuir

Se você deseja contribuir para o desenvolvimento da extensão, siga os passos abaixo:

1. Faça o `git clone` deste repositório.
2. Realize suas alterações no código.
3. Crie uma branch específica para suas modificações.
4. Faça commits explicativos das suas alterações.
5. Abra um pull request para a branch principal.

## Executando Alterações

Para executar alterações na extensão, siga os passos abaixo:

1.  Faça alterações no código conforme necessário.
2.  Salve os arquivos modificados.
3.  No Google Chrome, vá para `Mais Ferramentas` -> `Extensões`.
4.  Certifique-se de estar em modo desenvolvedor.
5.  Clique em "Atualizar" para recarregar a extensão com as alterações realizadas.

## Manifesto

O arquivo `manifest.json` contém as informações essenciais sobre a extensão, como nome, versão, descrição e permissões necessárias. Certifique-se de revisar esse arquivo para entender as configurações da extensão.

### Permissões

A extensão requer as seguintes permissões:

- `tabs`: Para interagir com abas abertas.
- `activeTab`: Para acessar a aba ativa.
- `scripting`: Para executar scripts na página.
- `clipboardWrite` e `clipboardRead`: Para interagir com a área de transferência.

## Estrutura do Código

O código-fonte está organizado em pastas para melhor modularidade.
A estrutura de arquivos do projeto é organizada da seguinte forma:

- **`128.png`**: Ícone da extensão.
- **`manifest.json`**: Arquivo de manifesto da extensão.
- **`core/`**: Diretório contendo os scripts principais.
  - **`background.js`**: Script de serviço em segundo plano.
  - **`getDomains.js`**: Script para obter domínios.
  - **`utils/`**: Diretório contendo utilitários.
    - **`executeScriptInActiveTable.js`**: Script para executar ação na aba ativa.
    - **`generateFirstStep.js`**: Script para gerar a primeira etapa do processo.
    - **`mapTableValues.js`**: Script para mapear valores da tabela.
- **`popup/`**: Diretório contendo os arquivos da interface popup.
  - **`index.html`**: Página HTML da interface popup.
  - **`styles.css`**: Folha de estilo CSS da interface popup.

### Explicação Detalhada da Estrutura do Código

- **`128.png`**: Este arquivo contém o ícone da extensão, usado para identificação visual na barra de ferramentas do navegador.
- **`manifest.json`**: O arquivo de manifesto é crucial e contém informações essenciais sobre a extensão, incluindo nome, versão, descrição e permissões necessárias. Certifique-se de revisar esse arquivo para entender as configurações da extensão.
- **`core/`**: Este diretório contém os scripts principais que impulsionam a funcionalidade da extensão.

  - **`background.js`**: Este script é executado em segundo plano, lidando com operações que não requerem interação direta do usuário.
  - **`getDomains.js`**: Responsável por obter informações relacionadas aos domínios, desempenhando um papel central na funcionalidade da extensão.
  - **`utils/`**: Este diretório contém utilitários auxiliares.

    - **`executeScriptInActiveTable.js`**: Permite a execução de scripts na aba ativa do navegador.
    - **`generateFirstStep.js`**: Gera a primeira etapa do processo de apontamento de domínio.
    - **`mapTableValues.js`**: Mapeia valores em uma tabela, facilitando a manipulação de dados.

- **`popup/`**: Este diretório contém os arquivos relacionados à interface popup da extensão.

  - **`index.html`**: A página HTML que compõe a interface popup.
  - **`styles.css`**: A folha de estilo CSS responsável pela aparência visual da interface popup.

---

Sinta-se à vontade para explorar e modificar os arquivos conforme necessário para aprimorar a extensão. Suas contribuições são bem-vindas!
