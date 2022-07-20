const frm = document.querySelector("form")
const resp1 = document.querySelector("#Name")
const resp2 = document.querySelector("#Promote")

frm.addEventListener("submit", (e) =>{
  const nome = frm.MedicamentoName.value
  const preco = Number(frm.MedicamentoPrice.value)
  const leveDobro = (preco * 2) 
  const desconto = leveDobro * 0.05
  const valorTotal = leveDobro - desconto

  resp1.innerText = `nome: ${nome}`
  resp2.innerText = `leve dois por: ${valorTotal.toFixed(2)}`
  
  e.preventDefault();
})