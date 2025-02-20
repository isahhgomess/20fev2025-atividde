document.addEventListener('DOMContentLoaded', function() {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte = 2;
    aumentaFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte += 0.4;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    diminuiFonteBotao.addEventListener('click', function() {
    tamanhoAtualFonte -= 0.4;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    });
