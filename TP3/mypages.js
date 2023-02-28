exports.pessoasPage = function(lista){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de Pessoas</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Id</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th><th>Ver mais</th>
                    </tr>

                `
                for(let i = 0; i < lista.length; i++){
                    pagHTML += `
                        <tr>
                            <td>${lista[i].id}</td>
                            <td>${lista[i].nome}</td>
                            <td>${lista[i].idade}</td>
                            <td>${lista[i].sexo}</td>
                            <td>${lista[i].morada.cidade}</td>
                            <td><a href="/pessoa?id=${lista[i].id}" class="w3-button w3-purple">Ver mais</button></a></td>
                        </tr>
                    `
                }
    pagHTML += `
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW 2023</h5>
                </footer>

            </div>
            </table>
        </body>
    </html>
    `
    return pagHTML
}

exports.pessoasPorSexoPage = function(listaMasculino, listaFeminino, listaOutro){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de Pessoas por Sexo</h1>
                </header>

                <div class="w3-container">
                    <div class="w3-row">
                        <div class="w3-col s4 m4 l4">
                            <h2>Sexo masculino</h2> 
                            <ul class="w3-ul">
                `
                for(let i = 0; i < listaMasculino.length; i++){
                    pagHTML += `
                        <li><a href="/pessoa?id=${listaMasculino[i].id}" style="text-decoration:none"> ${listaMasculino[i].nome}</a></li>
                    `
                }

                pagHTML +=  `</ul>
                        </div>
                        <div class="w3-col s4 m4 l4">
                            <h2>Sexo feminino</h2> 
                            <ul class="w3-ul">
                `

                for(let i = 0; i < listaFeminino.length; i++){
                    pagHTML += `
                        <li><a href="/pessoa?pessoa=${listaFeminino[i].id}" style="text-decoration:none">${listaFeminino[i].nome}</a></li>
                    `
                }

                pagHTML +=  ` </ul>
                        </div>
                        <div class="w3-col s4 m4 l4">
                            <h2>Outro</h2> 
                            <ul class="w3-ul">
                `

                for(let i = 0; i < listaOutro.length; i++){
                    pagHTML += `
                        <li> <a href="/pessoa?pessoa=${listaOutro[i].id}" style="text-decoration:none">${listaOutro[i].nome}</a></li>
                    `
                }
    pagHTML += `
                    </ul>
                </div>
            </div>

            <footer class="w3-container w3-blue">
                <h5>Generated in RPCW 2023</h5>
            </footer>

        </div>
        </table>
    </body>
</html>
`
    return pagHTML
}

exports.desportosPage = function(desportos){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Lista de Desportos</h1>
                </header>

                <div class="w3-container">
                    <ul class="w3-ul">
    `
    for (let desporto of desportos) {
        pagHTML += `
            <li><a style="text-decoration:none;" href="/desportos?desporto=${desporto}">${desporto}</a></li>
        `
    }
    

    pagHTML += `
                    </ul>
                </div>

                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW 2023</h5>
                </footer>

            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.top10Profissoes = function(profissoesOrdenadas){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>TOP 10 Profissões</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table">
                    <a href="/profissao">
                        <tr>
                            <th>Posição</th>
                            <th>Profissão</th>
                            <th>Quantidade de pessoas</th>
                            <th>Pessoas</th>
                        </tr>
                    </a>
    `
    var index = 1
    for (let profissao of profissoesOrdenadas) {
        pagHTML += `
            <tr>
                <td>${index}</td>
                <td>${profissao.profissao}</td>
                <td>${profissao.quantidade}</td>
                <td><a href="/profissoesTop10?profissao=${profissao.profissao}" class="w3-button w3-purple">Ver pessoas</button></a>
            </tr>
        </a>
        `
        index = index + 1
    }
    

    pagHTML += `
                    </table>
                </div>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.desportoPage = function(desporto, pessoas){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Pessoas que praticam ${desporto}</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Id</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th><th>Ver mais</th>
                    </tr>

                `
                for(let i = 0; i < pessoas.length; i++){
                    pagHTML += `
                        <tr>
                            <td>${pessoas[i].id}</td>
                            <td>${pessoas[i].nome}</td>
                            <td>${pessoas[i].idade}</td>
                            <td>${pessoas[i].sexo}</td>
                            <td>${pessoas[i].morada.cidade}</td>
                            <td><a href="/pessoa?id=${pessoas[i].id}" class="w3-button w3-purple">Ver mais</a></td>
                        </tr>
                    `
                }
    pagHTML += `
                    </table>
                </div>

                <footer class="w3-container w3-blue">
                    <h5>Generated in RPCW 2023</h5>
                </footer>

            </div>
            </table>
        </body>
    </html>
    `
    return pagHTML
}

exports.profissoesPage = function(profissao, pessoas){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Pessoas exercem a profissão "${profissao}"</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Id</th><th>Nome</th><th>Idade</th><th>Sexo</th><th>Cidade</th><th>Ver mais</th>
                    </tr>

                `
                for(let i = 0; i < pessoas.length; i++){
                    pagHTML += `
                        <tr>
                            <td>${pessoas[i].id}</td>
                            <td>${pessoas[i].nome}</td>
                            <td>${pessoas[i].idade}</td>
                            <td>${pessoas[i].sexo}</td>
                            <td>${pessoas[i].morada.cidade}</td>
                            <td><a href="/pessoa?id=${pessoas[i].id}" class="w3-button w3-purple">Ver mais</a></td>
                        </tr>
                    `
                }
    pagHTML += `
                    </table>
                </div>
            </div>
            </table>
        </body>
    </html>
    `
    return pagHTML
}

exports.pessoaPage = function(pessoa){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title> About People ... </title>
            <link rel="stylesheet" href="w3.css">
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-blue">
                    <h1>Descrição Pessoa"</h1>
                </header>

                <div class="w3-container">
                    <div class="w3-row">
                        <div class="w3-col m4 l3">
                            <h1>${pessoa.nome}</h1>
                            <h2>${pessoa.idade}</h2>
                            <h3>${pessoa.sexo}</h3>
                        </div>
                        <div class="w3-col m8 l9">
                       
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
    `

    return pagHTML
}