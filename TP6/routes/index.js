var express = require('express');
var router = express.Router();
var Pessoa = require('../controllers/pessoa')

router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.list()
    .then(pessoas => {
      res.render('index', { plist: pessoas, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de pessoas"})
    })
});

router.get('/pessoas/registo', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  res.render('addPessoaForm', {d: data})
});

router.get('/pessoas/:idPessoa', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.getPessoa(req.params.idPessoa)
    .then(pessoa => {
      res.render('pessoa', { p: pessoa, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo da pessoa"})
    })
});

router.get('/pessoas/edit/:idPessoa', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.getPessoa(req.params.idPessoa)
    .then(pessoa => {
      res.render('updatePessoaForm', {p: pessoa, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo da Pessoa"})
    })
});

router.get('/pessoas/delete/:idPessoa', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.getAluno(req.params.idPessoa)
    .then(pessoa => {
      res.render('deletePessoaForm', {p: pessoa, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo da pessoa"})
    })
});

router.get('/pessoas/delete/:idPessoa/confirm', (req,res)=>{
  Aluno.deletePessoa(req.params.idPessoa)
    .then(resposta => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo da pessoa"})
    })
})

router.post('/pessoas/registo', (req,res) => {
  var pessoa = {
    descrição: req.body.descrição,
    id: req.body.id,
    nome: req.body.nome,
    idade: req.body.idade, 
    sexo: req.body.sexo, 
    morada: {
      cidade: req.body.cidade, 
      distrito: req.body.distrito, 
    },
    BI: req.body.BI,
    profissao: req.body.profissao,
    partido_politico:{
      party_abbr: req.body.party_abbr,
      party_name: req.body.party_name,
    },
    religiao: req.body.religiao,
    desportos: req.body.desportos,
    animais: req.body.animais,
    figura_publica_pt: req.body.figura_publica_pt,
    marca_carro: req.body.marca_carro,
    destinos_favoritos: req.body.destinos_favoritos,
    atributos: {
      fumador: req.body.fumador == '1'? true: false,
      gosta_cinema: req.body.gosta_cinema == '1'? true: false,
      gosta_viajar: req.body.gosta_viajar == '1'? true: false,
      acorda_cedo: req.body.acorda_cedo == '1'? true: false,
      gosta_ler: req.body.gosta_ler == '1'? true: false,
      gosta_musica: req.body.gosta_musica == '1'? true: false,
      gosta_comer: req.body.gosta_comer == '1' ? true: false,
      gosta_animais_estimacao: req.body.gosta_animais_estimacao == '1' ? true: false,
      gosta_dancar: req.body.gosta_dancar == '1' ? true: false,
      comida_favorita: req.body.comida_favorita
    }
  }

  Pessoa.addPessoa(pessoa)
    .then(pessoa => {
      res.render('addPessoaConfirm', {p: pessoa})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro no armazenamento do registo da pessoa"})
    })
})

router.post('/pessoas/edit', (req,res) => {
  var data = new Date().toISOString().substring(0, 16)
  Pessoa.updatePessoa(req.body)
    .then(pessoa => {
      res.render('updatePessoaConfirm', {p: pessoa})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração do registo da pessoa"})
    })
})

module.exports = router;
