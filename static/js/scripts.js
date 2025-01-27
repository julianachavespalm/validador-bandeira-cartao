/**
 * Dicionário contendo as informações de regex e comprimentos válidos para diferentes bandeiras de cartões de crédito.
 */
const CARTOES = {
    "Visa": { "regex": /^4[0-9]{12}(?:[0-9]{3})?$/, "lengths": [13, 16] },
    "MasterCard": { "regex": /^5[1-5][0-9]{14}$/, "lengths": [16] },
    "American Express": { "regex": /^3[47][0-9]{13}$/, "lengths": [15] },
    "Discover": { "regex": /^6(?:011|5[0-9]{2})[0-9]{12}$/, "lengths": [16] },
    "Diners Club": { "regex": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, "lengths": [14] },
    "Hipercard": { "regex": /^(606282|3841)[0-9]{10,12}$/, "lengths": [13, 16, 19] }
};

/**
 * Valida o número do cartão de crédito.
 */
function validarCartao() {
    const numeroCartao = document.getElementById('numeroCartao').value.replace(/\s+/g, '');

    if (!/^\d+$/.test(numeroCartao)) {
        exibirResultado("O número do cartão deve conter apenas dígitos.");
        return;
    }

    for (const [bandeira, info] of Object.entries(CARTOES)) {
        if (info.lengths.includes(numeroCartao.length) && info.regex.test(numeroCartao)) {
            exibirResultado(`Cartão ${bandeira} válido.`);
            return;
        }
    }

    exibirResultado("Bandeira do cartão não reconhecida.");
}

/**
 * Limpa os campos de entrada e resultado.
 */
function limparCampos() {
    document.getElementById('numeroCartao').value = '';
    exibirResultado('');
    verificarCampo();
}

/**
 * Verifica o campo de entrada e habilita/desabilita os botões.
 */
function verificarCampo() {
    const numeroCartao = document.getElementById('numeroCartao').value;
    const validarBtn = document.getElementById('validarBtn');
    const limparBtn = document.getElementById('limparBtn');

    const isDisabled = numeroCartao.trim() === '';
    validarBtn.disabled = isDisabled;
    limparBtn.disabled = isDisabled;
}

/**
 * Exibe o resultado da validação.
 * @param {string} mensagem - A mensagem a ser exibida.
 */
function exibirResultado(mensagem) {
    document.getElementById('resultado').innerText = mensagem;
}