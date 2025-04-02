document. addEventListener ('DOMContentLoaded', function() {

const botaoAcessibilidade=document.getElementById(botao-acessibilidade);
const opcoesAcessibilidade=document.getElementById(opcoes-acessibilidade);

botaoAcessibilidade.addEventListener('click',function(){
    botaoAcessibilidade.classList.toggle('rotacao-botao');
    opcoesAcessibilidade.classList.toggle('apresenta-lita');
})



    const aumentaFonteBotao = this. getElementByld('aumenta-fonte');
    const diminuiFonteBotao = this. getElementById('diminuirfonte');

    let tamanhoAtualdaFonte = 1;

    aumentaFonteBotao.addEventListener('click',function () {
        tamanhoAtualdaFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click',function () {
        tamanhoAtualdaFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualdaFonte}rem`

    

})

})