frm = document.querySelector("form")
resp = document.querySelector("#resp")

frm.addEventListener("submit", (e) => {
e.preventDefault ();

let numero = Number(frm.inNumero.value)
    if (numero % 2 == 0) {
      resp.innerText = `${numero} é PAR`
    } else {
      resp.innerText = `${numero} é IMPAR`
    }

})