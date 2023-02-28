var http = require('http')
var url = require('url')
var axios = require('axios')
var fs = require('fs')
var mypages = require('./mypages.js')

http.createServer(function(req, res){
    var d = new Date().toISOString().substring(0,16)
    console.log(req.method + " " + req.url + " at " + d)
    var dicURL = url.parse(req.url, true)

    if(dicURL.pathname == "/"){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'})
            if (err){
                console.log(err)
                res.write("Erro: " + err)
            }else{
                res.write(data)
            }
            res.end()
        })
    }else if(dicURL.pathname == "/pessoas"){
        axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc")
            .then(function(resp){
                var pessoas = resp.data
                res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                res.end(mypages.pessoasPage(pessoas))
            })
            .catch( erro => {
                console.log("Erro: " + erro)
                res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                res.end("ERRO: " + erro)
            })
    }else if(dicURL.pathname == "/pessoas-por-sexo"){
        axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc&sexo=feminino")
            .then(function(resp){
                var listaFeminino = resp.data
                axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc&sexo=masculino")
                    .then(function(resp){
                        var listaMaculino = resp.data
                        axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc&sexo=outro")
                            .then(function(resp){
                                var listaOutro = resp.data
                                res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                                res.end(mypages.pessoasPorSexoPage(listaFeminino,listaMaculino,listaOutro))
                            })
                            .catch( erro => {
                                console.log("Erro: " + erro)
                                res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                                res.end("ERRO: " + erro)
                            })
                    })
                    .catch( erro => {
                        console.log("Erro: " + erro)
                        res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                        res.end("ERRO: " + erro)
                    })
            })
            .catch( erro => {
                console.log("Erro: " + erro)
                res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                res.end("ERRO: " + erro)
            })
    }else if(dicURL.pathname == "/desportos"){
        var q = url.parse(req.url, true).query
        if (Object.keys(q).length === 0){
            axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc")
                .then(function(resp){
                    var pessoas = resp.data
                    listaDesportos = []

                    // filtragem de desportos existentes
                    for (let pessoa of pessoas){
                        var desportos = pessoa.desportos
                        for (let desporto of desportos){
                            if (!listaDesportos.includes(desporto)){
                                listaDesportos.push(desporto)
                            }
                        }
                    }

                    listaDesportos.sort()

                    res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end(mypages.desportosPage(listaDesportos))
                })
                .catch( erro => {
                    console.log("sErro: " + erro)
                    res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end("ERRO: " + erro)
                })
        }else{
            axios.get("http://localhost:3000/pessoas?_sort=nome&_order=asc")
                .then(function(resp){
                    var pessoas = resp.data
                    pessoas = pessoas.filter(p => {
                        var desportos = p.desportos
                        for (let desporto of desportos){
                            if (q.desporto == desporto){
                                return true
                            }
                        }

                        return false
                    })

                    res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end(mypages.desportoPage(q.desporto, pessoas))
                })
                .catch( erro => {
                    console.log("Erro: " + erro)
                    res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end("ERRO: " + erro)
                })
        }
    }else if(dicURL.pathname == "/profissoesTop10"){
        var q = url.parse(req.url, true).query
        if (Object.keys(q).length === 0){
            axios.get("http://localhost:3000/pessoas")
                .then(function(resp){
                    var pessoas = resp.data
                    listaDeProfissoes = []

                    // filtragem das profissões existentes
                    for (let pessoa of pessoas){
                        var profissao = pessoa.profissao
                        if (!listaDeProfissoes.includes(profissao)){
                            listaDeProfissoes.push(profissao)
                        }
                    }

                    // Contagem da quantidade de vezes que as profissões aparecem
                    var quantidadeProfissoes = []
                    for (let profissao of listaDeProfissoes){
                        quantidadeProfissoes.push({ profissao: profissao, quantidade: pessoas.filter(p => profissao == p.profissao).length})
                    }

                    // Ordenação do top 10 das profissões por quantidade de vezes que aparecem
                    let top10ProfissoesOrdenadas = quantidadeProfissoes.sort(
                        (p1,p2) => (p1.quantidade > p2.quantidade) ? -1: 1
                    ).slice(0,10)

                    res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end(mypages.top10Profissoes(top10ProfissoesOrdenadas))
                })
                .catch( erro => {
                    console.log("Erro: " + erro)
                    res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end("ERRO: " + erro)
                })
        }else{
            axios.get("http://localhost:3000/pessoas?profissao=" + q.profissao)
                .then(function(resp){
                    var pessoas = resp.data

                    res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end(mypages.profissoesPage(q.profissao, pessoas))
                })
                .catch( erro => {
                    console.log("Erro: " + erro)
                    res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                    res.end("ERRO: " + erro)
                })
        }
    }else if(dicURL.pathname == "/pessoa"){
        var q = url.parse(req.url, true).query
        axios.get("http://localhost:3000/pessoas/" + q.id)
            .then(function(resp){
                var pessoa = resp.data
                res.writeHead(200, {'Content-Type': 'text/html ;charset=utf-8'})
                res.end(mypages.pessoaPage(pessoa))
            })
            .catch( erro => {
                console.log("Erro: " + erro)
                res.writeHead(500, {'Content-Type': 'text/html ;charset=utf-8'})
                res.end("ERRO: " + erro)
            })
        
    }else if(dicURL.pathname == "/w3.css"){
        fs.readFile('w3.css', function(err, data){
            res.writeHead(200, {'Content-Type':'text/css'})
            if (err){
                console.log("Erro na leitura da stylesheet")
                res.write("Erro: " + err)
            }else{
                res.write(data)
            }
            res.end()
        })
    }else {
        res.writeHead(404, {'Content-Type': 'text/html ;charset=utf-8'})
        res.end("Erro: Operação não suportada")
    }
}).listen(7777)

console.log("Servidor a escuta na porta 7777")