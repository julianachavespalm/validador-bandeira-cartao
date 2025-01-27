# Validador de Bandeira de Cartão de Crédito

## Objetivo

O objetivo deste projeto é validar a bandeira de cartões de crédito com base nos números fornecidos, garantindo a autenticidade e integridade das informações.

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Como Usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/julianachavespalm/validador-bandeira-cartao.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Execute o aplicativo:
    ```bash
    node script.js
    ```

## Acesso via GitHub Pages

Você pode acessar a aplicação diretamente através do GitHub Pages:

[Validador de Bandeira de Cartão de Crédito](https://julianachavespalm.github.io/validador-bandeira-cartao/)

### Instruções de Uso

1. Acesse o link acima.
2. Insira o número do cartão no campo fornecido.
3. Clique em "Validar" para ver a bandeira do cartão.
4. Clique em "Limpar" para limpar o campo "Número do cartão" e o resultado.

## Estrutura Lógica Aplicada

O `script.js` implementa a lógica de validação utilizando algoritmos específicos para identificar a bandeira do cartão com base nos dígitos iniciais. O fluxo principal inclui:

1. Receber o número do cartão.
2. Validar o formato e os dígitos.
3. Identificar a bandeira correspondente.
4. Retornar o resultado da validação.
