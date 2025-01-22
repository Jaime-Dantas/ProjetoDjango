/*
1. Faça o algoritmo para calcular a área (AREA) e o perímetro (P) de uma sala retangular,
sendo que as dimensões da sala (L e C) são fornecidas pelo usuário.
Apresente a área e o perímetro depois de calculados.

function calcArea (num1,num2){
    area = num1*num2;
    perimetro = 2 * (num1+num2);

    console.log('A área é igual a: ' + area)
    console.log('O perimetro é igual a: ' + perimetro)
}

calcArea(10,10);

2. Faça o algoritmo que calcule a idade de uma pessoa,
sendo que o ano atual (AA) e o ano do nascimento da pessoa (AN) são fornecidos pelo usuário.
(considere que a pessoa já fez aniversário nesse ano). Apresentar a idade da pessoa depois de calculada.


function calcIdade (AA,AN){
    let idade = AA - AN;
    console.log('Sua idade é: '+idade);
}

calcIdade(2025,1993);

3. Faça o algoritmo que calcule o valor em Reais (VAL_REAL), correspondente aos dólares que um turista possui no cofre do hotel. O programa deve solicitar os seguintes dados: Quantidade de dólares guardados no cofre (VAL_DOLAR) e cotação do dólar naquele dia (COT).


function cotacao(VAL_DOLAR,COT){
    let VAL_REAL = VAL_DOLAR * COT;
    console.log('Valor em Reais: '+VAL_REAL);
}

cotacao(100,6.23);

4. Faça o algoritmo para calcular o valor monetário do desconto (D),
sendo que o preço do produto (PR) é fornecido pelo usuário e o desconto é de 5%.
Apresentar o valor do desconto.

function desconto (valorProduto){
    if (valorProduto < 0) {
        console.log('Insira um valor positivo!')
    } else {
        let des = (valorProduto*5)/100;
        let total = valorProduto - des;
        console.log('Valor do Produto '+valorProduto)
        console.log('Valor do desconto '+des)
        console.log('Total a pagar '+total)
    }
}
desconto(100);

5. Faça o algoritmo para calcular quanto será pago por um produto (PAG),
sendo que o preço do produto (PR) e o desconto (D), em porcentagem,
são fornecidos pelo usuário. Apresentar o valor a ser pago pelo produto.

*/