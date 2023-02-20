var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req,res){
    var urlParsed = url.parse(req.url, true)
    var numReg = urlParsed.pathname.slice(1)

    if (!numReg){
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type':'text/html'})
            if (err){
                res.write("Erro: " + err)
            }else{
                res.write(data)
            }
            res.end()
        })
    }else{
        fs.readFile('registos/arq' + numReg + '.xml', function(err, data){
            res.writeHead(200, {'Content-Type':'text/xml'})
            if (err){
                res.write("Erro: " + err)
            }else{
                res.write(data)
            }
            res.end()
        })
    }
}).listen(7777)