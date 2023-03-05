# TP3

Criação de um serviço em Node.js sobre o dataset [Pessoas](https://epl.di.uminho.pt/~jcr/AULAS/ATP2022/), utilizando a API de dados **json-server**.

![enter image description here](https://raw.githubusercontent.com/henriqueparola/RPCW2023/master/TP3/images/banner.png)

### Descrição
O servidor desenvolvido possui as seguintes  funcionalidades:
* Listagem de todas as pessoas do *dataset*;
* Listagem das pessoas do *dataset* separadas por **sexo**;
* Listagem das pessoas do *dataset* separadas por **desportos**;
* Listagem das pessoas do *dataset* separadas pelas **profissões** (somente o Top 10 das profissões mais exercidas);

### Estrutura de ficheiros
* O ficheiro ***mypages.js*** possui os métodos que criam as páginas HTML (na forma de *string*) que serão enviadas nas resposta ao cliente, com *content-type* sendo *text/html*:
	* **pessoasPage(pessoas)**: retorna página HTML com a listagem de todas as pessoas por ordem alfabética;
	* **pessoasPorSexoPage(listaMasculino, listaFeminino, listaOutro)**: retorna página HTML com a listagem das pessoas por ordem alfabética separadas pelo seu **sexo**;
	* **desportosPage(desportos)**: retorna página HTML com todos os desportos armazenados, por ordem alfabética;
	* **top10Profissoes(profissoesOrdenadas)**: retorna página HTML com o Top 10 de profissões mais exercidas;
	* **desportoPage(desporto, pessoas)**: retorna página HTML com a listagem de pessoas por ordem alfabética  que praticam determinado desporto;
	* **profissoesPage(profissao, pessoas)**: retorna a página HTML com a listagem de pessoas por ordem alfabética que exercem determinada profissão;
    * **pessoaPage(pessoa)**: retorna a página HTML com descrição completa de uma pessoa.
* O ficheiro ***index.html*** possui a página inicial do serviço, caracterizada por um *link* para algumas outras outras páginas do serviço;
* *servidor.js* é o servidor em Node.js. Para corre-lo para executar ***node** servidor.js*. Possui as **rotas** que o serviço dispõem;
* ***w3.css*** contém o código CSS da *framework* de CSS da **w3school** que é utilizada nas páginas Web;
* ***package.json*** é o arquivo de metadados utilizado em projetos Node.js para gerenciar as dependências do projeto.

### Funcionamento das rotas

* **/** : disponibiliza a página index.html;
* **/pessoas** : disponibiliza a página HTML gerada pela função *pessoasPage*;
* **/pessoas-por-sexo** : disponibiliza a página HTML gerada pela função; *pessoasPorSexoPage*
* **/desportos** : disponibiliza a página HTML gerada pela função *desportosPage*
    * **?desporto={desporto}** se utilizada tal *query string* retorna a página HTML gerada pela função *desportoPage*
* **/profissoesTop10** : disponibiliza a página HTML gerada pela função *top10Profissoes*
    * **?profissao={profissao}** se utilizada tal *query string* retorna a página HTML gerada pela função *profissoesPage*
* **/pessoa/{id}** : disponibiliza a página HTML gerada pela função *pessoaPage*
    
### Execução

Devido ao servidor estar sendo contruído com recurso ao **npm**, a sua execução faz-se do seguinte modo:

```
npm install
npm start
```