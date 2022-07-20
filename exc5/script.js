frm = document.querySelector("form")
resp1 = document.querySelector("#Product")
resp2 = document.querySelector("#Product1")

frm.addEventListener("submit", (e) =>{
  const nome = frm.inName.value
  const preco = Number(frm.inPrice.value)
  const promocao = preco / 2
  const valortotal = preco * 2 + promocao

resp1.innerText = `${nome} - Promoção: Leve 3 por ${valortotal} `
resp2.innerText = `o terceiro sai apenas por ${promocao} `
 

  e.preventDefault()
})