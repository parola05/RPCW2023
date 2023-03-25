var mongoose = require('mongoose')

var moradaSchema = new mongoose.Schema({
    cidade:String,
    distrito:String 
})

var partidoPoliticoSchema = new mongoose.Schema({
    party_abbr:String,
    party_name:String 
})

var atributosSchema = new mongoose.Schema({
    fumador:Boolean,
    gosta_cinema:Boolean,
    gosta_viajar:Boolean,
    gosta_ler:Boolean,
    acorda_cedo:Boolean,
    gosta_musica:Boolean,
    gosta_comer:Boolean,
    gosta_animais_estimacao:Boolean,
    gosta_dancar:Boolean,
    comida_favorita:String 
})

var pessoaSchema = new mongoose.Schema({
    nome:String,
    idade:Number,
    sexo:String,
    morada:moradaSchema,
    CC:String,
    descrição:String,
    desportos:[String],
    BI:String,
    profissao:String,
    partido_politico:partidoPoliticoSchema,
    religiao:String,
    animais:[String],
    figura_publica_pt:[String],
    marca_carro:String,
    destinos_favoritos:[String],
    id:String,
    atributos:atributosSchema
})

module.exports = mongoose.model('pessoa',pessoaSchema)