# TP5

Refactor do TP4  utilizando o *Express*, com a estrutura de ficheiros base automatizada pelo **express-generator**  e **pug** para *view-engine*.

![enter image description here](https://raw.githubusercontent.com/henriqueparola/RPCW2023/master/TP5/images/banner-01.png)

### Descrição
A aplicação desenvolvida possui as funcionalidades descritas no TP4.

### Estrutura de ficheiros
* ***routes*** é o diretório das rotas (definição dos *endpoints*) da aplicação.
* ***controllers/*** é o diretório com os controladores da aplicação. Os controladores realizam a conexão da camada de dados com os roteadores, abstraindo alguma lógica do«estes últimos.
* ***views*** é o diretório com os *templates* em Pug utilizados.
* ***app.js*** é o arquivo com as configurações da app express.
* ***bin/*** é o diretório que contém as configurações de arranque do servidor.
* ***public/*** é o diretório de imagens, arquivos *javascript* e *css* (único *css* usado é o da w3school) 
* ***package.json*** é o arquivo de metadados utilizado em projetos Node.js para gerenciar as dependências do projeto.
* ***package.json*** é uma representação da base de dados utilizada pela aplicação.

### Funcionamento das rotas

Mesmo funcionamento descrito no TP4
    
### Execução

Devido ao servidor estar sendo contruído com recurso ao **npm**, a sua execução faz-se do seguinte modo:

```
npm install
npm start
```
