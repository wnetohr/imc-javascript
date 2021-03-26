//variáveis 
const calcular = document.getElementById('calcular');

//funções
function calculo() {
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value/(altura.value*altura.value)).toFixed(1)
        
        let diag = '';
        if(imc<18.5){
            diag = 'abaixo do peso.'
        }else if (imc<25){
            diag = 'peso ideal.'
        }else if (imc<30){
            diag = 'um pouco acim do peso.'
        }else if (imc<35){
            diag = 'obesidade grau I.'
        }else if (imc<40){
            diag = 'obesidade grau II'
        }else{diag='obesidade grau III'}

        resultado.textContent = `IMC: ${imc}    Resultado: ${diag}`
    } else { alert("Insira os valores nos campos!") }
}
calcular.addEventListener('click', calculo);
