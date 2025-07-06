const CARTOES = {
    "Visa": { "regex": /^4[0-9]{12}(?:[0-9]{3})?$/, "lengths": [13, 16] },
    "MasterCard": { "regex": /^5[1-5][0-9]{14}$/, "lengths": [16] },
    "American Express": { "regex": /^3[47][0-9]{13}$/, "lengths": [15] },
    "Discover": { "regex": /^6(?:011|5[0-9]{2})[0-9]{12}$/, "lengths": [16] },
    "Diners Club": { "regex": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, "lengths": [14] },
    "Hipercard": { "regex": /^(606282|3841)[0-9]{10,12}$/, "lengths": [13, 16, 19] }
};

function formatarNumeroCartao(value) {
    const numeroLimpo = value.replace(/\D/g, '');

    const numeroLimitado = numeroLimpo.slice(0, 19);

    const grupos = numeroLimitado.match(/.{1,4}/g);
    return grupos ? grupos.join(' ') : numeroLimitado;
}

function verificarCampo() {
    const input = document.getElementById('numeroCartao');
    const validarBtn = document.getElementById('validarBtn');
    const limparBtn = document.getElementById('limparBtn');

    const valorAtual = input.value.replace(/\D/g, '');
    input.value = formatarNumeroCartao(valorAtual);

    const comprimentoValido = valorAtual.length >= 13 && valorAtual.length <= 19;
    validarBtn.disabled = !comprimentoValido;
    limparBtn.disabled = valorAtual.length === 0;
}

function validarCartao() {
    const numeroCartao = document.getElementById('numeroCartao').value.replace(/\D/g, '');
    const resultado = document.getElementById('resultado');

    if (numeroCartao.length < 13 || numeroCartao.length > 19) {
        resultado.textContent = 'O número deve ter entre 13 e 19 dígitos';
        resultado.className = 'resultado resultado--erro';
        return;
    }

    for (const [bandeira, config] of Object.entries(CARTOES)) {
        if (config.regex.test(numeroCartao) && config.lengths.includes(numeroCartao.length)) {
            resultado.textContent = `${bandeira}`;
            resultado.className = 'resultado resultado--sucesso';
            return;
        }
    }

    resultado.textContent = 'Número inválido';
    resultado.className = 'resultado resultado--erro';
}

function limparCampos() {
    document.getElementById('numeroCartao').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').className = 'resultado';
    verificarCampo();
}

window.onload = function() {
    verificarCampo();
};