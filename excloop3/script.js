frm = document.querySelector("form")
resp1 = document.querySelector("#resp1")
resp2 = document.querySelector("#resp2")


let numContas = 0   // declara e inicializa contador...
let valTotal = 0    // ... e acumulador (variáveis globais)
let resposta = ""   // string com a resposta a ser exibida  

frm.addEventListener("submit", (e)=>{
e.preventDefault()


const descricao = frm.inDesc.value
const valor = Number(frm.inValor.value)

numContas++                      // adiciona valores ao contador e acumulador
  valTotal = valTotal + valor

  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"  

  resp1.innerText = `${resposta}--------------------------------`
  resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

  frm.inDesc.value = ""      // limpa campos do form
  frm.inValor.value = ""
  frm.inDesc.focus()         // posiciona no campo inDescricao do form
})