Feature: Login no sistema
  Como um usuário
  Eu quero me autenticar no sistema
  Para acessar minhas funcionalidades

  Scenario: Usuário realiza login com sucesso
    Given que o usuário está na página de login
    When ele insere as credenciais válidas
    Then ele deve ser redirecionado para a página inicial
