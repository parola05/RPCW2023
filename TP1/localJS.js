const significadoElement = document.getElementById("significado");
const significadoInnerHtmlStandart = significadoElement.innerHTML
const personalidadeElement = document.getElementById("personalidade");
const personalidadeInnerHtmlStandart = personalidadeElement.innerHTML
const popularidadeElement = document.getElementById("popularidade");
const popularidadeInnerHtmlStandart = popularidadeElement.innerHTML
const informacoesElement = document.getElementById("informacoes");
const informacoesInnerHtmlStandart = informacoesElement.innerHTML

const verMaisString = '<div class="row d-flex align-items-center section" id="verMaisSignificado"><div class="col-auto"><i class="fas fa-arrow-right fa-lg text-white"></i></div><div class="col-auto"><h3 class="text-white">Ver mais</h3></div></div>'

significadoElement.addEventListener("mouseenter", (event) => {
    // event.target.style.color = "purple";
    significadoElement.innerHTML = '<a href="#significadoSection">'+verMaisString+'</a>'
    var previewText = document.getElementById("previewText")
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = "Significa “senhora do lar” ou “aquela que governa o lar”. Henriqueta é a versão feminina de Henrique, nome que foi originado a partir do germânico Haimirich, formado pela união dos elementos heim, que significa “lar”, e rik, que pode ser traduzido como “senhor” ou “príncipe”. Por associação com a versão feminina Henriqueta, o significado do nome passa a ser interpretado como “senhora” do lar” ou “a governante do lar”."
        previewText.style.opacity = 1;
    },500);
}, false);


significadoElement.addEventListener("mouseleave", (event) => {
    significadoElement.innerHTML = significadoInnerHtmlStandart
    var previewText = document.getElementById("previewText");
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = ""
    },500);
});

personalidadeElement.addEventListener("mouseenter", (event) => {
    // event.target.style.color = "purple";
    personalidadeElement.innerHTML = '<a href="#personalidadeSection">'+verMaisString+'</a>'
    var previewText = document.getElementById("previewText")
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = "Extremamente criativa e confiante. Quem se chama Henriqueta é inteligente o bastante para raciocinar com rapidez as tarefas do dia-a-dia. Gosta de se sentir livre e de variedades, pessoas com o nome Henriqueta, são assim. Tem pensamentos voltados sempre a mudanças. Gosta de criações. Não tem medo de enfrentar a vida e correr atrás dos desejos e anseios. Henriqueta se concentra para fazer sempre bem feito tudo aquilo que se propõe."
        previewText.style.opacity = 1;
    },500);
}, false);

personalidadeElement.addEventListener("mouseleave", (event) => {
    personalidadeElement.innerHTML = personalidadeInnerHtmlStandart
    var previewText = document.getElementById("previewText");
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = ""
    },500);
});

popularidadeElement.addEventListener("mouseenter", (event) => {
    // event.target.style.color = "purple";
    popularidadeElement.innerHTML = '<a href="#popularidadeSection">'+verMaisString+'</a>'
    var previewText = document.getElementById("previewText")
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = "Entre as décadas de 40 e 50, foram registradas aproximadamente 397 pessoas com o nome Henriqueta, o que representa 20% do total de pessoas que já se chamaram assim, no Brasil."
        previewText.style.opacity = 1;
    },500);
}, false);

popularidadeElement.addEventListener("mouseleave", (event) => {
    popularidade.innerHTML = popularidadeInnerHtmlStandart
    var previewText = document.getElementById("previewText");
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = ""
    },500);
});

informacoesElement.addEventListener("mouseenter", (event) => {
    // event.target.style.color = "purple";
    informacoesElement.innerHTML = '<a href="#informacoesSection">'+verMaisString+'</a>'
    var previewText = document.getElementById("previewText")
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = "Origem: Italiano - Tipo: Comum - Pronúncia: Enriqueta - Nomes similares: Enriqueta, Enrriqueta e Henrriqueta"
        previewText.style.opacity = 1;
    },500)
}, false);

informacoesElement.addEventListener("mouseleave", (event) => {
    informacoes.innerHTML = informacoesInnerHtmlStandart
    var previewText = document.getElementById("previewText");
    previewText.style.opacity = 0;
    setTimeout(function(){ 
        previewText.innerHTML = ""
    },500);
});
