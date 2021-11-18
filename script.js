const pixelBoard = document.querySelector('#pixel-board');
const paletaDeCores = document.querySelector('#color-palette').children;
const quadroDePixel = document.querySelector('#pixel-board').children;
const botaoLimpar = document.getElementById('clear-board');
const botaoVqv = document.getElementById('generate-board');
const botaoBot = document.getElementById('bot');
const corDois = document.getElementById('colorDois');
const corTres = document.getElementById('colorTres');
const corQuatro = document.getElementById('colorQuatro');

function pixelsIniciais() {
  for (let i = 0; i < 5; i += 1) {
    const pixelLinha = document.createElement('div');
    pixelLinha.className = 'pixel';
    for (let j = 0; j < 5; j += 1) {
      const pixelColuna = document.createElement('div');
      pixelColuna.className = 'pixel';
      pixelBoard.appendChild(pixelColuna);
    }
  }
  observaPaleta();
  observaQuadro();
}

function addPixels() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  const tamanho = tamanhoDoQuadro();
  for (let i = 0; i < tamanho; i += 1) {
    const pixelLinha = document.createElement('div');
    pixelLinha.className = 'pixel';
    pixelBoard.style.width = 42 * tamanho + 'px';
    for (let j = 0; j < tamanho; j += 1) {
      const pixelColuna = document.createElement('div');
      pixelColuna.className = 'pixel';
      pixelBoard.appendChild(pixelColuna);
      pixelBoard.style.height = 42 * tamanho + 'px';
    }
  }
  observaPaleta();
  observaQuadro();
}

function addBot() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  const tamanho = 15;
  for (let i = 0; i < tamanho; i += 1) {
    const pixelLinha = document.createElement('div');
    pixelLinha.className = 'pixel';
    pixelLinha.id = i;
    pixelBoard.style.width = 42 * tamanho + 'px';
    for (let j = 0; j < tamanho; j += 1) {
      const pixelColuna = document.createElement('div');
      pixelColuna.className = 'pixel';
      pixelColuna.id = ''+i+','+''+j+'';
      pixelBoard.appendChild(pixelColuna);
      pixelBoard.style.height = 42 * tamanho + 'px';
    }
  }
  observaPaleta();
  observaQuadro();
  botPinta();
}

function observaPaleta() {
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', corSelecionada);
  }
}

function corSelecionada(event) {
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function observaQuadro() {
  for (let i = 0; i < quadroDePixel.length; i += 1) {
    quadroDePixel[i].addEventListener('click', pintaPixel);
  }
}

function pintaPixel(event) {
  const corSelecionada = document.querySelector('.selected');
  const cor = getComputedStyle(corSelecionada).getPropertyValue('background-color');
  event.target.style.backgroundColor = cor;
}

function limparQuadro() {
  for (let i = 0; i < quadroDePixel.length; i += 1) {
    quadroDePixel[i].style.backgroundColor = 'white';
  }
}

function tamanhoDoQuadro() {
  let tamanho = document.querySelector('#board-size');
  if (tamanho.value == 0) {
    alert('Board inválido!');
    tamanho.value = 5;
  } else if (tamanho.value < 5) {
    tamanho.value = 5;
  } else if (tamanho.value > 50) {
    tamanho.value = 50;
  }
  let tamanhoGerado = tamanho.value;
  tamanho.value = '';
  return tamanhoGerado;
}

function botPinta() {
  cor1();
  cor2();
  cor3();
  cor4();
  cor5();
  cor6();
  cor7();
  cor8();
  cor9();
  cor10();
  cor11();
  cor12();
  cor13();
  cor14();
  setTimeout(function(){finalizaDesenho();}, 4200);
}

function cor1() {
  const classeCor = document.querySelector('#colorUm');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['0,0', '1,0', '2,0', '3,0', '4,0'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 400 * i);  
  }
}

function cor2() {
  const classeCor = document.querySelector('#colorDois');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['5,0', '6,0'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 400 * i);  
  }
}

function cor3() {
  const classeCor = document.querySelector('#colorTres');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['7,0', '8,0', '9,0', '10,0', '11,0', '12,0', '13,0', '14,0'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 350 * i);  
  }
}

function cor4() {
  const classeCor = document.querySelector('#colorQuatro');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['0,1', '0,2','0,11','0,12','0,12','0,13','0,14', '1,14', '2,1', '3,1', '4,1', '5,1', '6,1','13,2', '13,3', '13,4', '14,1', '14,2', '14,3', '14,4', '14,5', '14,6', '14,12', '14,13', '14,14'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 125 * i);  
  }
}

function cor5() {
  const classeCor = document.querySelector('#colorCinco');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['1,1', '1,2', '2,2', '2,10', '2,11', '11,7', '12,7', '12,8'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 350 * i);  
  }
}

function cor6() {
  const classeCor = document.querySelector('#colorSeis');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['0,3', '0,4', '0,5', '0,6', '0,7', '0,8', '0,9', '0,10', '1,9', '1,10', '1,11', '1,12', '1,13', '2,12', '2,13', '7,1', '8,1', '9,1', '10,1', '12,1', '12,2', '12,3', '12,4', '12,5', '12,6', '13,1', '13,5', '13,6', '13,7', '13,8', '13,9', '13,10', '13,11', '13,12', '13,13', '13,14', '14,7', '14,8', '14,9', '14,10', '14,11'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 100 * i);  
  }
}

function cor7() {
  const classeCor = document.querySelector('#colorSete');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['1,3', '1,4', '2,3', '2,9', '2,14', '3,2', '3,3', '3,11', '4,2', '4,12', '7,3', '8,2', '8,3', '9,2', '9,13', '10,2', '11,1', '11,11', '12,9', '12,10', '12,12'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 200 * i);  
  }
}

function cor8() {
  const classeCor = document.querySelector('#colorOito');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['1,5', '1,6', '2,4', '2,5', '2,6', '3,4', '3,5', '3,12', '3,13', '4,3', '4,4', '4,5', '4,13', '5,2', '5,3', '5,14', '6,2','7,2', '8,14', '9,3', '9,5', '9,14', '10,4', '10,5', '10,6', '10,13', '10,14', '11,4', '11,5', '11,6', '11,12', '11,13', '11,14', '12,11', '12,13', '12,14'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 100 * i);  
  }
}

function cor9() {
  const classeCor = document.querySelector('#colorNove');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['4,6', '4,11', '5,4', '5,5', '5,11', '5,12', '5,13','6,3','6,4','6,5','6,12','7,4', '9,11','10,9','10,10', '11,8', '11,9'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 200 * i);  
  }
}

function cor10() {
  const classeCor = document.querySelector('#colorDez');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['1,7', '1,8', '2,7', '2,8', '3,6', '3,7', '3,14', '4,14', '8,4', '9,4', '10,3', '11,2', '11,3'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 200 * i);  
  }
}

function cor11() {
  const classeCor = document.querySelector('#colorOnze');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['3,8', '3,9', '4,7', '4,8', '5,6', '5,7', '6,6', '6,13', '6,14', '7,5', '7,12', '7,13', '7,14', '7,6', '8,5', '8,12', '8,13', '9,12', '10,7', '10,8', '10,11', '10,12', '10,13', '10,14', '11,10'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 100 * i);  
  }
}

function cor12() {
  const classeCor = document.querySelector('#colorDoze');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['3,10', '4,9', '4,10', '8,6', '9,6', '9,7'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 100 * i);  
  }
}

function cor13() {
  const classeCor = document.querySelector('#colorTreze');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['5,8', '5,10', '6,7', '6,10', '6,11', '8,7', '8,10', '8,11', '9,9', '9,10'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 300 * i);  
  }
}

function cor14() {
  const classeCor = document.querySelector('#colorQuatorze');
  const cor = getComputedStyle(classeCor).getPropertyValue('background-color');
  let pixels = ['5,9', '6,8', '6,9', '8,8', '8,9', '9,8'];
  for (let i = 0; i < pixels.length; i += 1) {
    setTimeout(function(){document.getElementById(pixels[i]).style.backgroundColor = cor;}, 400 * i);  
  }
}

function finalizaDesenho() {
  const pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.border = 0;
  }
  let tamanho = 15;
  for (let j = 0; j < tamanho; j += 1) {
    pixelBoard.style.width = 50 * tamanho + 'px';
    pixelBoard.style.height = 50 * tamanho + 'px';
  }

  pixelBoard.style.border = 'white solid 20px';
  pixelBoard.style.borderBottom = 'white solid 120px';
  pixelBoard.style.borderRadius = '20px';
  window.scroll(0, 2000);

  for (let k = 0; k < pixel.length; k += 1) {
    pixel[k].style.width = '50px';
    pixel[k].style.height = '50px';
  } 
}

function startScript() {
  pixelsIniciais();
  botaoLimpar.addEventListener('click', limparQuadro);
  botaoVqv.addEventListener('click', addPixels);
  botaoBot.addEventListener('click', addBot);
}


window.onload = startScript();
