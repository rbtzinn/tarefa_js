function validarFormulario() {
    var numeroA = parseFloat(document.getElementById('campoA').value);
    var numeroB = parseFloat(document.getElementById('campoB').value);

    if (numeroB > numeroA) {
        document.getElementById('mensagem').innerHTML = 'Formulário válido! Número B é maior que o número A.';
    } else {
        document.getElementById('mensagem').innerHTML = 'Formulário inválido! Número B deve ser maior que o número A.';
    }

    return false;
}
