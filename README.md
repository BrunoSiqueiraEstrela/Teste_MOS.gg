# TESTE PARA A MOS.GG

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

Teste para a MOG.GG feito usando NODE.JS e desenvolvido principalmente em TYPESCRIPT utilizando padrão REST. Foi usado o framework Express para cuidar das requisições, respostas, rotas, controles e serviços. Foi usado <i> axios </i> para fazer requisições de dados para a API da Twitch.


### Desenvolvimento

Tarefas desenvolvidas:

- [x] /Streamers
- [x] /Follow
- [x] /Login
- [x] /SignUp
- [ ] Adicionar MiddleWare para verificar o email e senha do usuário
- [ ] Reformatar código para o padrão CleanCode
- [ ] Mudar as declarações de erros para inglês

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu às seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### 🎲 Rodando o Back End (servidor)

Clone este repositório
git clone <https://github.com/BrunoSiqueiraEstrela/Teste_MOS.gg>

Acesse a pasta do projeto no terminal/cmd

cd Teste_MOS

Instale as dependências
$ npm install

Crie um arquivo .ENV ou use adicione nas suas váriaveis de ambiante

$ TWITCH_CLIENT_ID - Seu ID de cliente da Twitch
$ TWITCH_TOKEN - O seu Token da Twitch
$ SECRET - Segredo do token JWT
$ PORT -  Porta do app

Execute a aplicação
$ npm start

 O servidor iniciará na porta da variável  PORT: - acesse <http://localhost:0000> por exemplo

### Testando a API

Existem quatros ENDPOINTS da API:

#### /signup do tipo POST]
Usado para cadastrar o usuário, ele precisa mandar no corpo em formado de JSON dois dados(`Email` e `Password`):

{ 
  "email" : "Email do usuário",
  "password" : "Senha do usuário"
}

#### /login do tipo POST
Usado para autenticar o `Usuário`, ele usa o mesmo padrão do login, recebendo também o `Email` e `Password` em JSON:

{ 
  "email" : "Email do usuário",
  "password" : "Senha do usuário"
}

Caso o `Usuário` seja autenticado com sucesso, será respondido ao usuário um token de Autenticação JWT:

{
"token":"TOKEN CRIPTOGRAFADO"
}

#### /follow do tipo POST 

Usado para subtrair o valor de `queue` do `Usuário`. Ele deve ser usado no parâmetro do requerimento:

#### Exemplo: http://localhost:POST/follow=2 `Usuário` de ID 2 vai ter seu atributo `queue` subtraído  por 1.

Esse ENDPOINT é protegido e será necessário usar o `token` dado pelo login para acessar. 


#### /streamers do tipo GET

Retornara dados do usuário e do seu canal em forma ordenada e paginada. Ele funciona com uma query, indicando a página a ser exibida.

#### Exemplo: http://localhost:4000/streamers?page=3 Retornara o resultado da página 3.

Esse ENDPOINT também é protegido e precisa do `token` para acessar

[⬆ Voltar ao topo](#Teste_MOS.gg)<br>
