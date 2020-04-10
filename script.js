function gerar(){
  cont = 1000000
  while(cont > 0){
    cont -= 1
    htmlCertificado = emitirCertificado(inputNome.value)
  }
  listalink = 
  ["https://codepen.io/ChristopherHauschild/pen/yLYLGBY", 
   "https://codepen.io/ChristopherHauschild/pen/OJVevJq",
   "https://codepen.io/ChristopherHauschild/pen/dyYyvRg",
   "https://codepen.io/ChristopherHauschild/pen/WNQNRNg"]
  
  contalink = 0
  listalinkHTML = ""
  while(contalink < 4){

    link = listalink[contalink]
    listalinkHTML = `<li>${link}</li>` + listalinkHTML
    contalink += 1
  }

  document.body.innerHTML = 
    ` ${htmlCertificado} 
    <ol>
     ${listalinkHTML}
    </ol>`
}
