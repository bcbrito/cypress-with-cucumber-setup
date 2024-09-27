Feature: Login de Usuário

  Scenario: Usuário realiza login com sucesso
    Given que o usuário está na página de login "http://the-internet.herokuapp.com/login"
    When ele preenche as credenciais válidas "tomsmith" e "SuperSecretPassword!"
    And ele clica no botão de login
    Then ele deve ser redirecionado para a página de "Secure Area"
    And deve ver uma mensagem de boas-vindas    