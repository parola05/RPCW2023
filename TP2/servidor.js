var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req,res){
    var urlParsed = url.parse(req.url, true)
    //var numReg = urlParsed.pathname.slice(1)

    urlSubs = urlParsed.pathname.split("/")
    format = ''
    numReg = ''

    if (urlSubs.length == 3){
        format = urlSubs[1]
        numReg = urlSubs[2]
    }

    if (!format){
        console.log("Req index!")
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
        if (format == 'xml'){
            console.log("Req xml!")
            fs.readFile('registosXML/arq' + numReg + '.xml', function(err, data){
                res.writeHead(200, {'Content-Type':'text/xml'})
                if (err){
                    res.write("Erro: " + err)
                }else{
                    res.write(data)
                }
                res.end()
            })
        }else if(format == 'html'){
            console.log("Req html!")
            fs.readFile('registosHTML/arq' + numReg + '.html', function(err, data){
                res.writeHead(200, {'Content-Type':'text/html'})
                if (err){
                    res.write("Erro: " + err)
                }else{
                    res.write(data)
                }
                res.end()
            })
        }
    }
}).listen(7777)