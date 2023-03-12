var http = require('http')
var axios = require('axios')
var templates = require('./templates')
var static = require('./static.js')
const { parse } = require('querystring');

function getLastId(callback){
    axios.get("http://localhost:3000/tasks?_sort=id&_order=desc")
    .then(response => {
        console.log(response.data[0])
        callback(response.data[0].id)
    })
}

function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

var todoServer = http.createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                if(req.url == "/"){
                    axios.get("http://localhost:3000/tasks")
                        .then(response => {
                            var tasks = response.data
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write(templates.todoPage(tasks, d))
                            res.end()
                        })
                        .catch(function(erro){
                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Não foi possível obter a lista de tasks... Erro: " + erro)
                            res.end()
                        })
                }
                else{
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write("<p>" + req.method + " " + req.url + " unsupported on this server.</p>")
                    res.end()
                }
                break
            case "POST":
                if(req.url == '/'){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    collectRequestBodyData(req, result1 => {
                        //console.log("result", result)
                        if(result1){
                            getLastId(result2 =>{
                                axios.post('http://localhost:3000/tasks',{
                                    ateQuando: result1.ateQuando,
                                    quem: result1.quem,
                                    oQue: result1.oQue,
                                    feito: false,
                                    id: result2 + 1
                                }).then(function(resp){
                                    axios.get("http://localhost:3000/tasks")
                                        .then(response => {
                                            var tasks = response.data
                                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write(templates.todoPage(tasks, d))
                                            res.end()
                                        })
                                        .catch(function(erro){
                                            res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                            res.write("<p>Não foi possível obter a lista de tasks... Erro: " + erro)
                                            res.end()
                                        })
                                }).catch(erro => {
                                    console.log("Erro: " + erro)
                                    res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                    res.write("<p>Error in json-server insert ...</p>")
                                    res.end()
                                })
                            })
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }else if(req.url == '/update'){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    collectRequestBodyData(req, result1 => {
                        console.log("RES:",result1)
                        if(result1){
                            axios.put('http://localhost:3000/tasks/' + result1.id,{
                                feito: result1.feito  == 'on' ? true: false,
                                ateQuando: result1.ateQuando,
                                quem: result1.quem,
                                oQue: result1.oQue,
                            }).then(function(resp){
                                axios.get("http://localhost:3000/tasks")
                                    .then(response => {
                                        var tasks = response.data
                                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                        res.write(templates.todoPage(tasks, d))
                                        res.end()
                                    })
                                    .catch(function(erro){
                                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                        res.write("<p>Não foi possível obter a lista de tasks... Erro: " + erro)
                                        res.end()
                                    })
                            }).catch(erro => {
                                console.log("Erro: " + erro)
                                res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Error in json-server insert ...</p>")
                                res.end()
                            })
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }else if(req.url == '/delete'){
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    collectRequestBodyData(req, result1 => {
                        console.log("RES:",result1)
                        if(result1){
                            axios.delete('http://localhost:3000/tasks/' + result1.id,{
                            }).then(function(resp){
                                axios.get("http://localhost:3000/tasks")
                                    .then(response => {
                                        var tasks = response.data
                                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                        res.write(templates.todoPage(tasks, d))
                                        res.end()
                                    })
                                    .catch(function(erro){
                                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                                        res.write("<p>Não foi possível obter a lista de tasks... Erro: " + erro)
                                        res.end()
                                    })
                            }).catch(erro => {
                                console.log("Erro: " + erro)
                                res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                                res.write("<p>Error in json-server insert ...</p>")
                                res.end()
                            })
                        }
                        else{
                            res.writeHead(201, {'Content-Type': 'text/html;charset=utf-8'})
                            res.write("<p>Unable to collect data from body...</p>")
                            res.end()
                        }
                    })
                }else{
                    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                    res.write('<p>Unsupported POST request: ' + req.url + '</p>')
                    res.write('<p><a href="/">Return</a></p>')
                    res.end()
                }
                break
            default: 
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
                res.write("<p>" + req.method + " unsupported in this server.</p>")
                res.end()
        }
    }
    
})

todoServer.listen(7778, ()=>{
    console.log("Servidor à escuta na porta 7778...")
})