frm = document.querySelector("form")
resp1 = document.querySelector("#resp1")
resp2 = document.querySelector("#resp2")

frm.addEventListener("submit",(e) => {
  const nomeAluno = frm.inName.value
  const nota1 = Number(frm.inNota1.value)
  const nota2 = Number(frm.inNota2.value)
  const media = (nota1 + nota2) /2


  if (media >= 5){
    resp2.innerText = `Parabens ${nomeAluno} você foi aprovado(a)`
    resp2.style.color = "blue"
  } else {
    resp2.innerText = `O aluno ${nomeAluno} foi reprovado(a)`
    resp2.style.color = "red"
  }
  resp1.innerText = `Média das notas ${media}`
  
  e.preventDefault();
})