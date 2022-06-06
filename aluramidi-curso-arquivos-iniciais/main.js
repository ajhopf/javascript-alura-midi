function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)
  //no js, em uma condição if, como no caso abaixo, nao necessito colocar element!=null, ou seja, elemento não for nulo, pois automáticamente, dentro dessa condiçao, o js irá verificar se elemento existe and (&&) ...
  if (elemento && elemento.localName === 'audio') {
    elemento.play()
  } else {
    console.log('Elemento não encontrado ou seletor inválido')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listaDeTeclas.length; i++) {
  //aqui criou uma variável para não ter que ficar chamando várias vezes a listaDeTeclas[contador]
  const tecla = listaDeTeclas[i]
  //procurando pela lista de classes das teclas, todas possuem uma segunda classe única para cada uma, com o nome referente ao seu instrumento
  const instrumento = tecla.classList[1]
  //template string
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
  //Esta função faz com que, ao acionar uma das teclas via teclado, ela tenha o mesmo comportamento que quando pressiona com o mouse -> fica vermelha. Atenção, pois no css já havia sido adicionado os parâmetros para a classe .tecla.ativa
  tecla.onkeydown = function (evento) {
    if (evento.code === 'Enter' || evento.code === 'Space') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
