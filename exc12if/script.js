frm = document.querySelector("form")
resp = document.querySelector("#resp")


frm.addEventListener("submit",(e) => {
  velocidadePermitida = frm.inVeloPermitida.value
  velocidadeCondutor = frm.inVeloCondutor.value

 // cria as condições para verificar situação do condutor
 if (velocidadeCondutor <= velocidadePermitida) {
  resp.innerText = "Situação: Sem Multa"
} else {
  const maisVinte = velocidadePermitida * 20/100
  if (velocidadeCondutor <= maisVinte) {
    resp.innerText = "Situação: Multa Leve"
  } else {
    resp.innerText = "Situação: Multa Grave"
  }
  e.preventDefault()
}
})
  

  


