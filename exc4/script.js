frm = document.querySelector("form")
totalPagar = document.querySelector("#total")


frm.addEventListener("submit", (e) => {
  const valorUso = Number(frm.inMinutes.value)
  const minutosUsoCliente = Number(frm.inMinutesCliente.value) 
  

   // calcula valor a pagar (arredonda para cima)
  const total = Math.ceil(minutosUsoCliente / 15) * valorUso

totalPagar.innerText = `Valor a pagar ${total.toFixed(2)}`


e.preventDefault()
})