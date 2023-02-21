# TP2
Criação de um servidor de registos do dataset [arqueossítios](https://epl.di.uminho.pt/~jcr/AULAS/RPCW2023/datasets/arq.xml) em **Node.js**.

![enter image description here](https://raw.githubusercontent.com/henriqueparola/RPCW2023/master/TP2/images/banner.png)
### Descrição
O servidor desenvolvido possui nomeadamente 3 funcionalidades:
* Disponibilização individual dos registos do *dataset* em **formato XML**;
* Disponibilização individual dos registos do *dataset* em **formato HTML**;
* Pagina inicial contendo um "índice" para **navegar** sobre os registos do *dataset*.

### Estrutura de ficheiros
* O ficheiro *geraIndexPage* cria o ficheiro *index.html* de acordo com os registos contido no ficheiro *arq.xml*;
* O ficheiro geraRegistosHTML e geraRegistosXML geram os ficheiros individuais de cada registo contido em *arq.xml, em *html** e  *xml*, respetivamente,  para as pastas registosHTML e registosXML;
* *servidor.js* é o servidor em Node.js. Para corre-lo para executar ***node** servidor.js*.

### Funcionamento das páginas
Para acessar aos arquivos XML individuais de cada registo para inserir o *path*: "/\<**formato**>/\<**numRegisto**>" onde:
* **formato pode ser **xml** ou **html**;
* **numRegisto** é um número inteiro correspondente a ordem mostrada no índice presente na página *index.html*

A página *index.html* possui a lista de registos, apenas com a identificação dos sítios arqueológicos enumerados por ordem alfabética.