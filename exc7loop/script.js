frm = document.querySelector("form")
resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) =>{
  const name = frm.inName.value
  const masculino = frm.inMasc.checked
  const altura = frm.inAltura.value

 let peso
 if (masculino == true){
  peso = 22 * Math.pow(altura, 2)
 } else {
  peso = 21 * Math.pow(altura, 2)
 }

 resp.innerText = `${name} seu peso ideal é ${peso.toFixed(3)}`
 e.preventDefault();

  
})