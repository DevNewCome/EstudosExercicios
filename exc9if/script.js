frm = document.querySelector("form")
resp1 = document.querySelector("#resp1")
resp2 = document.querySelector("#resp2")
resp3 = document.querySelector("#resp3")

frm.addEventListener("submit", (e)=>{
  e.preventDefault();

  valorSaque = Number(frm.inSaque.value)
  if (valorSaque % 10 != 0){ //Se o valor do saque não for multiplo de 10, no caso resto de 10 = 0
    alert("valor invalido notas disponiveis (10,50,100)");
    frm.inSaque.focus()
    return
  }

  // Lógica de contagem das notas usando resto % 
  const notasCem = Math.floor(valorSaque/100)
  let resto = valorSaque % 100 // quanto restou apos a contagem das notas de 100, ou seja quanto que restaria de uma divisao de valorsaque por 100, representando o %

  const notasCinquenta = Math.floor(resto / 50)
      resto = resto % 50

  const notasDez = Math.floor(resto / 10)
    if (notasCem > 0 ){
      resp1.innerText = `Notas de R$ 100: ${notasCem}`
    }    
    
    if (notasCinquenta > 0 ){
      resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    }   

    if (notasDez > 0 ){
      resp3.innerText = `Notas de R$ 10: ${notasDez}`
    }   

})