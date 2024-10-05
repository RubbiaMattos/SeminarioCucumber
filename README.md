# Seminário Cucumber - Ferramenta de Teste de Aceitação do Usuário (UAT)

Este projeto faz parte de um seminário sobre ferramentas de testes, focado no uso do **Cucumber** para realizar **Testes de Aceitação do Usuário (UAT)**. O Cucumber é uma ferramenta baseada em BDD (Behavior Driven Development) que permite criar testes automatizados escritos em uma linguagem compreensível tanto por desenvolvedores quanto por profissionais de negócio.

## Índice
- [Objetivo](#objetivo)
- [Ferramenta Utilizada](#ferramenta-utilizada)
- [Configuração do Projeto](#configuração-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar os Testes](#como-executar-os-testes)
- [Exemplo de Teste](#exemplo-de-teste)
  - [Cenário Gherkin](#cenário-gherkin)
  - [Definição dos Passos](#definição-dos-passos)
- [Prós e Contras da Ferramenta](#prós-e-contras-da-ferramenta)
- [Referências](#referências)
- [Integrantes da Equipe](#integrantes-da-equipe)
- [Professor](#professor)

## Objetivo

O objetivo deste projeto é demonstrar o uso do **Cucumber** para automatizar testes de aceitação do usuário (UAT), validando o comportamento do sistema com base nos requisitos de negócio. Os cenários de teste são escritos em uma linguagem simples e executados automaticamente, garantindo que o software funcione conforme o esperado.

## Ferramenta Utilizada

- **Cucumber**: Ferramenta de desenvolvimento orientado a comportamento (BDD) que permite que cenários de teste sejam escritos em uma linguagem compreensível, chamada **Gherkin**.
- **Node.js**: Ambiente de execução JavaScript que permite a automação dos testes com Cucumber.
- **VSCode**: Editor de código usado para desenvolver e executar o projeto.

## Configuração do Projeto

### Requisitos

- **Node.js** instalado ([Node.js Download](https://nodejs.org/))
- Um editor de código como **Visual Studio Code** ([VSCode Download](https://code.visualstudio.com/))

### Instalação

1. Clone este repositório para sua máquina local:
   ```bash
   git clone https://github.com/RubbiaMattos/SeminarioCucumber.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd SeminarioCucumber
   ```

3. Instale as dependências do projeto com o comando:

   ```bash
   npm install
   ```

Isso instalará todas as dependências listadas no arquivo `package.json`, incluindo o **Cucumber**.

## Estrutura do Projeto

A estrutura do projeto segue o padrão básico para testes com o Cucumber:

```bash
SeminarioCucumber/
│
├── features/                   # Contém os arquivos .feature que definem os cenários de teste
│   ├── login.feature           # Cenário de exemplo para o login
│   └── step-definitions/       # Implementações dos passos dos cenários de teste
│       └── loginSteps.js       # Arquivo que implementa os steps do cenário de login
│
├── node_modules/               # Módulos instalados via npm (ignorado no .gitignore)
├── package.json                # Arquivo de configuração do npm e scripts do projeto
└── README.md                   # Documentação do projeto
```

### Arquivo `package.json`

```json
{
  "name": "seminariocucumber",
  "version": "1.0.0",
  "scripts": {
    "test": "cucumber-js"
  },
  "devDependencies": {
    "@cucumber/cucumber": "^7.0.0"
  }
}
```

Esse arquivo define as dependências do projeto e o script para rodar os testes do Cucumber.

## Como Executar os Testes

1. Para executar os testes, utilize o comando abaixo no terminal:

   ```bash
   npm test
   ```

2. O Cucumber irá ler o arquivo `.feature` e executar os testes automaticamente, exibindo os resultados no terminal.

## Exemplo de Teste

### Cenário Gherkin

Este é o conteúdo do arquivo `login.feature`, que define o cenário de teste de login:

```gherkin
Feature: Login no sistema
  Como um usuário
  Eu quero me autenticar no sistema
  Para acessar minhas funcionalidades

  Scenario: Usuário realiza login com sucesso
    Given que o usuário está na página de login
    When ele insere as credenciais válidas
    Then ele deve ser redirecionado para a página inicial
```

### Definição dos Passos

Este é o conteúdo do arquivo `loginSteps.js`, que define as ações associadas a cada passo do cenário acima:

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');

Given('que o usuário está na página de login', function () {
  console.log('Usuário está na página de login');
});

When('ele insere as credenciais válidas', function () {
  console.log('Usuário inseriu credenciais válidas');
});

Then('ele deve ser redirecionado para a página inicial', function () {
  console.log('Usuário foi redirecionado para a página inicial');
});
```

Este arquivo implementa o comportamento de cada passo descrito no arquivo `login.feature`.

## Prós e Contras da Ferramenta

### Prós

- **Linguagem acessível**: Utiliza uma linguagem simples (Gherkin), que facilita a comunicação entre desenvolvedores, testadores e stakeholders.
- **Automatização eficiente**: Facilita a automação de cenários de aceitação do usuário (UAT).
- **Integração com múltiplas linguagens**: Pode ser usado com várias linguagens de programação (JavaScript, Java, Ruby, etc.).

### Contras

- **Complexidade em projetos grandes**: Em grandes projetos, o número de cenários pode se tornar difícil de gerenciar.
- **Curva de aprendizado**: Para quem nunca trabalhou com BDD, pode haver uma curva de aprendizado para entender a sintaxe Gherkin e a ligação com o código de automação.

## Referências

- [Cucumber Documentation](https://cucumber.io/docs)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)
- [Node.js Official Website](https://nodejs.org/)

## Integrantes da Equipe

Grupo 8 - Teste de Aceitação

- Nelson de Campos Nolasco
- Rubia Coelho de Matos
- Walter Roberto Rodrigues Louback

## Professor

- Rodrigo Couto e Silva