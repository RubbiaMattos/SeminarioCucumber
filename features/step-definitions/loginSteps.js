const { Given, When, Then } = require('@cucumber/cucumber');

Given('que o usuário está na página de login', function () {
    // Código para simular a navegação para a página de login
    console.log('Usuário está na página de login');
});

When('ele insere as credenciais válidas', function () {
    // Código para simular a inserção de credenciais
    console.log('Usuário inseriu credenciais válidas');
});

Then('ele deve ser redirecionado para a página inicial', function () {
    // Código para verificar o redirecionamento
    console.log('Usuário foi redirecionado para a página inicial');
});
