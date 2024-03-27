const botaoEnviar = document.querySelector('.btn-enviar')

const inputs = document.querySelectorAll('input')

const camposObrigatorios = document.querySelectorAll('.campo-obrigatorio')

botaoEnviar.addEventListener('click', (enviar) => {
    enviar.preventDefault();

    inputs.forEach((input, index) => {

        const inputPreenchido = input.value.trim()
        
            if (inputPreenchido === '') {
                input.classList.add('borda-vermelha')
                camposObrigatorios[index].style.display = 'block'


            } else {
                input.classList.remove('borda-vermelha');
                camposObrigatorios[index].style.display = 'none'
                input.classList.add('borda-verde');
            }
        })
    })
