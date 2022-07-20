frm = document.querySelector('form')
resp = document.querySelector('#resp')

frm.addEventListener('submit', e => {
  e.preventDefault()

  horaBrasil = Number(frm.inHour.value)
  horaFranca = horaBrasil + 5

  if (horaFranca > 24) {
    horaFranca -= 24
  }

  resp.innerText = `Hora na frança ${horaFranca}`
})
