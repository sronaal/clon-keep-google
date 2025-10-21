
const textarea = document.getElementById('nota')
const titulo_nota = document.getElementById('titulo')
const btn_guardar = document.getElementById('btn-guardar')
const form = document.getElementById('form')

textarea.addEventListener('input', function() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + 'px';
})

form.addEventListener('submit', (e) => e.preventDefault())

btn_guardar.addEventListener('click', () => {

    const titulo = titulo_nota.value
    const nota   = textarea.value
    
    const div_card = document.createElement('div')
    const contenedor_notas = document.querySelector('.notas')
    const h2_titulo = document.createElement('h2')
    const p_nota = document.createElement('p')


    h2_titulo.textContent = titulo
    p_nota.textContent = nota


    div_card.classList.add('card')
    div_card.appendChild(h2_titulo)
    div_card.appendChild(p_nota)
    contenedor_notas.appendChild(div_card)


})