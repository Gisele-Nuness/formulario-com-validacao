const botaoEnviar = document.querySelector('.btn-enviar')

const inputs = document.querySelectorAll('input')

const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')

botaoEnviar.addEventListener('click', (enviar) => {
    enviar.preventDefault();

    inputs.forEach((input, index) => {

        if (input.value) {
            input.classList.add('borda-verde');
            input.classList.remove('borda-vermelha');
            camposObrigatorios[index].style.display = 'none'


        } else {
            input.classList.add('borda-vermelha')
            camposObrigatorios[index].style.display = 'block'
            input.classList.remove('borda-verde');
        }
    })
})
