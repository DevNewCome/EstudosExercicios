frm = document.querySelector("form")
resp = document.querySelector("#resp")

frm.addEventListener("submit",(e)=>{
  const numero = frm.inNumero.value
  let resposta = ""

for (let i =0; i<=15; i++) {
  resposta += numero + "x" + i + "=" + (numero * i) + "\n"
}

resp.innerText = resposta;

e.preventDefault()
})