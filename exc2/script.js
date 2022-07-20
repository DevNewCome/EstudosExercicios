const resp1 = document.querySelector("#resp1")
const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
  const quilo = Number(frm.inQuilo.value)
  const consumo = Number(frm.inGrama.value)

  const valorTotal = quilo / 1000 * consumo

  resp1.innerText = `Valor a ser pago ${valorTotal}`
  e.preventDefault();
})