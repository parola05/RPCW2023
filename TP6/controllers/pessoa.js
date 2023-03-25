var axios = require('axios')
var Pessoa = require('../models/pessoa')

// Pessoas list
module.exports.list = () => {
    return Pessoa.
            find().
            sort({nome:1})
        .then(docs => {
            return docs
        })
        .catch(erro => {
            return erro
        })
}

// Pessoa Info
module.exports.getPessoa = id => {
    return Pessoa.findOne({id:id})
        .then(pessoa => {
            return pessoa
        })
        .catch(erro => {
            return erro
        })
}

// Adiciona uma Pessoa
module.exports.addPessoa = p => {
    return Pessoa.create(p)
        .then(pessoa => {
            return pessoa
        })
        .catch(erro => {
            return erro
        })
}

// Atualiza uma Pessoa
module.exports.updatePessoa = p => {
    return Pessoa.updateOne({id:p.id},p)
        .then(pessoa => {
            return pessoa
        })
        .catch(erro => {
            return erro
        })
}

// Deleta uma Pessoa
module.exports.deletePessoa = id => {
    return Pessoa.deleteOne({id:id})
        .then(pessoa => {
            return pessoa
        })
        .catch(erro => {
            return erro
        })
}