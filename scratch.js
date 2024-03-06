const posicaoSuperiorInicial = 50,
    posicaoEsquerdaInicial = 50,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    imgAvatar = document.getElementById('Avatar'),
    styleAvatar = window.getComputedStyle(imgAvatar);

var posicaoSuperior = 50,
    posicaoEsquerda = 50,
    topAvatar,
    leftAvatar;

    imgAvatar.style.position = "absolute";
    imgAvatar.style.top = posicaoSuperior = "px";
    imgAvatar.style.left = posicaoEsquerda = "px";

function getTopStyle(elementGet){
    let styleElement = window.getComputadorStyle(elementGet);
    return parseInt(styleElement.getPropertyValue('top').replace("px",''));

}

function getLeftStyle(elementToGet){
    let styleElement = window.getComputedStyle(elementGet);
    return parseInt(styleElement.getPropertyValue('left').replace("px",''));
}

function moverParaEsquerda() {
    console.clean();
    leftAvatar = getLeftStyle(imgAvatar);
    if(leftAvatar > posicaoEsquerdaInicial){
        posicaoEsquerda -= parseInt(txtPixel.value);
        if(posicaoEsquerda <posicaoEsquerdaInicial){
            posicaoEsquerda = posicaoEsquerdaInicial
        }
        imaAvatar.style.left = posicaoEsquerda + "px";
    }else{
        console.error("Ops! Chegou ao limite, tente outra direção");
    }
    console.log("Posição do avatar à esquerda:", imgAvatar.style.left);
}



function moverParaDireita() {
    console.clean();
    leftAvatar = getLeftStyle(imgAvatar);
    if(leftAvatar > posicaoEsquerdaFinal){
        posicaoEsquerda += parseInt(txtPixel.value);
        if(posicaoEsquerda > posicaoEsquerdaInicial){
            posicaoEsquerda = posicaoEsquerdaInicial
        }
        imaAvatar.style.left = posicaoEsquerda + "px";
    }else{
        console.error("Ops! Chegou ao limite, tente outra direção");
    }
    console.log("Posição do avatar à esquerda:", imgAvatar.style.left);
}


function moverParaCima() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top); topAvatar = getTopStyle (imgAvatar);
    if (topAvatar > posicaoSuperiorInicial) {
    posicaoSuperior = parseInt(txtPixel.value);
    if (posicaoSuperior < posicaoSuperiorInicial) { posicaoSuperior = posicaoSuperiorInicial;
    }
    imgAvatar.style.top = posicaoSuperior + "px";} 
    else {
    console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");}
    
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);

}



function moverParaBaixo() {
    console.clear();
    console.log("Posição superior do avatar antes: ", imgAvatar.style.top);
    topAvatar = getTopStyle(imgAvatar);
    if (topAvatar < posicaoSuperiorFinal) {
    posicaoSuperior += parseInt(txtPixel.value);
    if (posicaoSuperior > posicaoSuperiorFinal) {
    posicaoSuperior = posicaoSuperiorFinal;
    }
    imgAvatar.style.top = posicaoSuperior + "px";
    }
    else {
    console.error("Ops! Chegou ao limite e não é possível mais mover para cima. Tente outro botão.");
    console.log("Posição superior do avatar depois: ", imgAvatar.style.top);
    }
}
    
    