# TP6

Criação de um serviço de gestão de *pessoas*  utilizando *Express*, *MongoDB*, *Pug* e o *dataset Pessoas*.

![enter image description here](https://raw.githubusercontent.com/henriqueparola/RPCW2023/master/TP6/images/banner.png)

### Descrição
A aplicação desenvolvida possui as seguintes funcionalidades:
* Listar todas as pessoas do *dataset*;
* Visualizar as informações de uma *pessoa*;
* Adicionar uma *pessoa* no sistema;
* Deletar uma *pessoa* do sistema;
* Editar as informações de uma *pessoa* existente.

### Estrutura de ficheiros
* ***routes*** é o diretório das rotas (definição dos *endpoints*) da aplicação.
* ***controllers/*** é o diretório com os controladores da aplicação. Os controladores realizam a conexão da camada de dados com os roteadores, abstraindo alguma lógica destes últimos.
* ***views/*** é o diretório com os *templates* em Pug utilizados.
* ***app.js*** é o arquivo com as configurações da app express.
* ***bin/*** é o diretório que contém as configurações de arranque do servidor.
* ***public/*** é o diretório de imagens, arquivos *javascript* e *css* (único *css* usado é o da w3school) 
* ***package.json*** é o arquivo de metadados utilizado em projetos Node.js para gerenciar as dependências do projeto.
* ***models/*** */ é o diretório que contém os modelos da aplicação. Isto é, as estruturas que serão utilizadas como 
referência as coleções do MongoDB.

### Funcionamento das rotas

* **[GET]** ***'/'***: Lista todas as pessoas do *dataset*;
* **[GET]** ***'/pessoas/registo'***: Retorna o formulário de registo de uma *pessoa*;
* **[GET]** ***/pessoas/:idPessoa***: Retorna todas as informações da pessoa com id *idPessoa*;
* **[POST]** ***/pessoas/registo***: Adiciona a *pessoa* enviada no *body* no sistema;
* **[GET]** ***/pessoas/delete/:idPessoa***: Deleta a pessoa com id *idPessoa*;
* **[GET]** ***/pessoas/edit/:idPessoa***: Retorna o formulário para a edição do registo da pessoa com id *idPessoa*;
* **[POST]** ***/pessoas/edit/:idPessoa***: Edita a pessoa com *idPessoa* no sistema;

    
### Execução

Devido ao servidor estar sendo contruído com recurso ao **npm**, a sua execução faz-se do seguinte modo:

```
npm install
npm start
```
