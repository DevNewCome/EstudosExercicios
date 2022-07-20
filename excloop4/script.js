const prompt = require("prompt-sync")()
console.log("programa ano de copa do mundo, digite 0 para sair")
console.log('------------------')

do {
  const ano = Number(prompt("Ano: "))
  if (ano == 0) {
    break
  } else if (ano == 1942 || ano == 1946) {
    console.log (`Nao houve copá em ${ano} (Segunda guerra mundial)`)
  } else if (ano >= 1930 && ano % 4 == 2) {
    console.log(`Sim! ${ano} é ano de copa do mundo`)
  } else {
    console.log (`Não é ano de copa do mundo`)
  }
} while (true)