frm = document.querySelector("form")
resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) =>{
  const numero = frm.inNumero.value
  let resposta = `Entre ${numero} e 1 \n `
  for (let i = numero; i > 1;  i-- ) { // isolando o 1, começando apartir do 2 .. 3 4 5 6 ..
    resposta = resposta + i + ","
  
  }

  resp.innerText = resposta + "1."
  
  e.preventDefault()
})