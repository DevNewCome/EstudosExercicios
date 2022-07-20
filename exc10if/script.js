frm = document.querySelector("form")
resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
  QtPessoa = Number(frm.inPessoa.value)
  QtPeixes = Number(frm.inPescados.value)
  let TotalPagar = (20 * QtPessoa) + (QtPeixes * 12) 
  
 

  if (QtPeixes == 0) {
    resp.innerText = `Total a pagar ${TotalPagar} e você ganhou um peixe de brinde`
  } else {
    resp.innerText = `Total a pagar ${TotalPagar}`
  }

  e.preventDefault();
})