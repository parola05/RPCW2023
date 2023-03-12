# TP3

Criação de uma *single page application (SPA)* para uma *To-Do list*  utilizando Node.js e a API de dados **json-server**.

![enter image description here](https://raw.githubusercontent.com/henriqueparola/RPCW2023/master/TP4/images/banner.png)

### Descrição
A aplicação desenvolvida possui as seguintes  funcionalidades:
* Criação de uma *task*;
* Listagem de *tasks* feitas e *tasks* por fazer;
* Atualização do **estado** da *task* (alterar entre **por fazer** e **feito**)
* Rempção de uma *task* do sistema.

### Estrutura de ficheiros
* O ficheiro ***template.js*** possui o método - *todoPage()* - que cria a única página HTML (na forma de *string*) que é enviada na resposta ao cliente, com *content-type* sendo *text/html*
* *servidor.js* é o servidor em Node.js. Para corrê-lo basta executar ***node** servidor.js*. Possui as **rotas** que o serviço dispõem;
* ***public/w3.css*** contém o código CSS da *framework* de CSS da **w3school** que é utilizada nas páginas Web;
* ***package.json*** é o arquivo de metadados utilizado em projetos Node.js para gerenciar as dependências do projeto.
* ***static.js*** possui a função - *staticResource()* - que detecta se uma rota solicitada é sobre um recurso estático, assim como a função - *serveStaticResource()* - que lida com pedidos de recursos estáticos, como ficheiros de estilização e imagens.

### Funcionamento das rotas

* **GET**: 
    * **/** : disponibiliza a única página HTML da aplicação
* **POST**:
    * **/** : cria uma *task*
    * **/update** : atualiza o estado de uma determinada *task* 
    * **/delete** : remove a *task* do sistema 
    
### Execução

Devido ao servidor estar sendo contruído com recurso ao **npm**, a sua execução faz-se do seguinte modo:

```
npm install
npm start
```