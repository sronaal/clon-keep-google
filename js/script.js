document.addEventListener('DOMContentLoaded', () => {
    mostrarNotas()
})

const textarea = document.getElementById('nota')
const titulo_nota = document.getElementById('titulo')
const btn_guardar = document.getElementById('btn-guardar')
const form = document.getElementById('form')
const contenedor_notas = document.querySelector('.notas')

textarea.addEventListener('input', function () {
    this.style.height = "auto"
    this.style.height = this.scrollHeight + 'px'
})

form.addEventListener('submit', (e) => e.preventDefault())

btn_guardar.addEventListener('click', () => {
    const titulo = titulo_nota.value.trim()
    const nota = textarea.value.trim()

    if (titulo === "" || nota === "") {
        alert("Debes completar ambos campos")
        return
    }

    let notas = JSON.parse(localStorage.getItem('notas')) || []

    const notaObject = {
        id: Date.now(),
        titulo,
        nota
    }

    notas.push(notaObject)
    localStorage.setItem('notas', JSON.stringify(notas))

    titulo_nota.value = ""
    textarea.value = ""
    textarea.style.height = "auto"

    mostrarNotas()
})

const mostrarNotas = () => {
    const contenedor_notas = document.querySelector('.notas')
    contenedor_notas.innerHTML = "" // Limpia las notas previas

    let notas = JSON.parse(localStorage.getItem('notas')) || []

    notas.forEach((nota) => {
        const div_card = document.createElement('div')
        const h2_titulo = document.createElement('h2')
        const p_nota = document.createElement('p')

        h2_titulo.textContent = nota.titulo
        p_nota.textContent = nota.nota

        div_card.classList.add('card')
        div_card.appendChild(h2_titulo)
        div_card.appendChild(p_nota)
        contenedor_notas.appendChild(div_card)
    })
}
