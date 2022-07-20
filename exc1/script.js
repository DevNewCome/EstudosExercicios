frm = document.querySelector("form")
resp1 = document.querySelector("#outResp1")
resp2 = document.querySelector("#outResp2")
resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value
  const preco = Number(frm.inPreco.value)

  const entrada = preco * 0.50
  const parcela = (preco * 0.50) / 12

  resp1.innerText = `Promocao: ${veiculo}`
  resp2.innerText = `Entrada de : ${entrada.toFixed(2)}`
  resp3.innerText = `12x de: ${parcela.toFixed(2)} sem juros !`

  e.preventDefault();
})