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

function totalProd (valorProd,desconto){
    let totalProduto;
    let totalDesc;

    if ((valorProd <= 0) || (desconto <= 0)){
        console.log('Valor ínvalido, insira apenas números positivos.')
        return;
    }
    totalDesc = (valorProd*desconto)/100;
    totalProduto = valorProd - ((valorProd*desconto)/100);
    console.log('Valor do item: '+valorProd);
    console.log('Desconto: '+totalDesc);
    console.log('Total a pagar: '+totalProduto);
}
totalProd(100,5)

6. Faça o algoritmo para calcular qual foi a porcentagem de desconto dada em um determinado produto (DESC),
(PRECO) e o preço que foi cobrado por ele depois do desconto (PRECOF) são fornecidos pelo usuário.

function porcentagemDesconto (preco,precodes){
    let desconto;
    let porcem;

    if (precodes <= 0 || preco <=0){
        console.log("Valor invalido, preço e desconto devem ser positivos!")
        return;
    }
    desconto = preco - precodes;
    porcem = ((desconto/preco)*100);

    console.log('Valor do item: '+preco);
    console.log('Desconto: '+porcem);
    console.log('Total a pagar: '+precodes);
    
}

porcentagemDesconto(100,90);


7. Faça o algoritmo que receba do usuário uma temperatura em graus Farenheit (F) e a transforme em graus Celsius (C). A fórmula é C = 5/9 (F – 32).
function farenheitparaCelcius(faren){
    let celcius;
    celcius = (5/9)*(faren-32);
    console.log('A tamperatura '+faren+' convertida para Celsius é: '+celcius.toFixed(1)+'°')
}
farenheitparaCelcius(100)



8. Faça o algoritmo que calcule a quantidade de tijolos iguais (QTD)
necessários para construir uma determinada parede.
São dados de entrada do programa: dimensões do tijolo (altura – AT e largura – LT)
e dimensões da parede a ser construída (altura – AP e largura – LP).

function previsaoConstrucao(alturaTijolo,larguraTijolo,alturaParede,larguraParede){    
    const medis = [alturaParede,larguraParede, alturaTijolo, larguraTijolo]

    if (medis.some((v)=> typeof v !== "number")){
        console.log("Entrada invalida, por favor insira valores numéricos.")
        return;
    }  

    let areaTijolo = alturaTijolo*larguraTijolo;
    let areaParede = alturaParede*larguraParede;
    total = areaParede/areaTijolo;
    console.log("A quantidade aproximada de tijolos para construir uma parede de "+areaParede+"m² é de: "+total);
}
previsaoConstrucao(5,2,10,10);

14) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 

function maiorDez(n){
    if (n>10){
        console.log(`${n} é maior que DEZ!`)
    } else {
        console.log(`${n} não é maior que DEZ!`)
    }
}
maiorDez(12)

15) Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
function positivoNegativo(n){
    if (typeof n !== "number"){
        console.log ("Entrada invalida, por favor digite um numéro")
        return
    }

    if (n >= 0){
        console.log(`${n} é um numéro positivo!`)
    } else {
        console.log(`${n} é um numéro negativo!`)
    }
}
positivoNegativo(12)
positivoNegativo(-10)
positivoNegativo("abc")

16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. 
function compasDesc(n){
    if (typeof n !== "number" || isNaN(n)){
        console.log("Entrada inválida! Por favor, digite um número.")
        return;
    } else if (n < 12){
        total = n *1.30
        console.log(`Valor total a pagar: R$ ${total}`)
        return;
    } else {
        total = n*1
        console.log(`Valor total a pagar: R$ ${total}`)
        return;
    }
}
compasDesc(5)
compasDesc(12)
compasDesc('12')

17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. 
function notaMedia(nota1,nota2){
    media = (nota1+nota2)/2
    if (media >=6){
        console.log(`Média: ${media}, Aluno aprovado!`)
        return;
    } else {
        console.log(`Média: ${media}, Aluno reprovado!`)
        return;
    }
}
notaMedia(6,6);
notaMedia(6,5);

18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). 

function idadeVoto(anoNasc,anoAtual){
    idade = anoAtual-anoNasc;

    resul = idade >=18 ? "Poderá Votar" : "Não tem idade suficiente para votar";

    console.log(`Você ${resul}`)
}
idadeVoto(1993,2025);
idadeVoto(2010,2025);

19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
function valorMaior(num1, num2) {  
    if (num1 === num2) {
        console.log("Entrada inválida, digite valores diferentes!");
        return;
    }
    let maior = num1 > num2 ? num1 : num2; 
    console.log(`O maior valor é: ${maior}`);
}
valorMaior(10, 5);
valorMaior(3, 8);

20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
function maiorMenor(num1, num2) {  
    if (num1 === num2) {
        console.log("Entrada inválida, digite valores diferentes!");
        return;
    }
    let maior = num1 > num2 ? num1 : num2; 
    let menor = num1 < num2 ? num1 : num2; 
    console.log(`O maior valor é: ${maior}`);
    console.log(`O menor valor é: ${menor}`);
}
maiorMenor(10, 5);
maiorMenor(3, 8);

27) Ler um valor e escrever se é positivo, negativo ou zero. 
function positivoNegativo(n){
    switch(true){
        case (n>0):
            console.log(`${n} é um valor positivo!`)
            break;
        case (n<0):
            console.log(`${n} é um valor negativo!`)
            break;
        case (n==0):
            console.log(`${n} é um valor neutro!`)
            break;
        default:
            console.log("Valor Invalido!")
            break;            
    }
}
positivoNegativo(10)
positivoNegativo(-5)
positivoNegativo(0)
positivoNegativo("abc")

28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
function trioMaior (nun1,nun2,nun3){
    if (nun1 == nun2 || nun1 == nun3 || nun2 == nun3) {
        console.log("Entrada invalida, Digite valores diferentes");
        return;
    }
    let maior = [nun1,nun2,nun3].sort((a,b) => a-b);
    console.log(O maior valor é: ${maior[2]});
}
trioMaior(5,2,10)
trioMaior(45,12,10)
trioMaior(10,1,10)
29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 
function maiorSoma(nun1,nun2,nun3){
    
    if (new Set([nun1,nun2,nun3]).size !== 3){
        console.log("Entrada invalida, Digite valores diferentes");
        return;
    }
    let ordem = [nun1,nun2,nun3].sort((a,b) => a-b);
    soma = ordem[2]+ordem[1];
    console.log(A soma dos maiores é: ${soma});
}
maiorSoma(10,2,8)
maiorSoma(10,24,80)
maiorSoma(10,24,10)
30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. 
function ordemCrescente(nun1,nun2,nun3){
    
    if (new Set([nun1,nun2,nun3]).size !== 3){
        console.log("Entrada invalida, Digite valores diferentes");
        return;
    }
    let ordem = [nun1,nun2,nun3].sort((a,b) => a-b);    
    console.log(Os valores em ordem ficam: ${ordem});
}
ordemCrescente(10,2,8)
ordemCrescente(10,24,80)
ordemCrescente(10,10,10)
31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 
function verificarTriangulo(nun1,nun2,nun3){    
    arr=[nun1,nun2,nun3]
    if (!arr.every(num => typeof num === "number" && !isNaN(num))){
        console.log("Entrada invalida, Digite apenas números");        
    }
    let ladoA = nun2+nun3
    let ladoB = nun1+nun3
    let ladoC = nun1+nun2    
    if ( nun1 < ladoA && nun2 < ladoB  && nun3 < ladoC ){
        console.log('É um triângulo.');
        return;
    } else {
        console.log('Não é um triângulo')
    }    
}
verificarTriangulo(10,10,10);
verificarTriangulo(100,15,10);
verificarTriangulo(10,3,4);

32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. 
function jogoFutebol(timeA,golsA,timeB,golsB){    
    let time1 = [timeA,golsA];
    let time2 = [timeB,golsB];
    if (time1[1] == time2[1]){
        console.log("EMPATE!")
    } else if (time1[1] > time2[1]){
        console.log(`${time1[0]} é o atual campeão do campeonato!`)
    } else {
        console.log(`${time2[0]} é o atual campeão do campeonato!`)
    }           
}
jogoFutebol("Fluminense",3,"Bahia",2);
jogoFutebol("Fluminense",0,"Bahia",0);
jogoFutebol("Fluminense",1,"Bahia",2);

33) Ler dois valores e imprimir uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro. 
function tresMensagens(A,B){
    switch(true){
        case (A>B):
            console.log(`${A} Primeiro é maior!`)
            break;
        case (A<B):
            console.log(`${B} Segundo é maior!`)
            break;
        case (A==B):
            console.log(`Números iguais!`)
            break;
        default:
            console.log("Valor Invalido!")
            break;            
    }
}
tresMensagens(10,5)
tresMensagens(6,21)
tresMensagens(10,10)
tresMensagens("abc")

34) Seja o seguinte algoritmo: início ler x ler y z= (x*y) + 5 se z <= 0 então resposta ‘A’ senão se z <= 100 então resposta ‘B’ senão resposta ‘C’ fim_se fim_se escrever z, resposta fim Faça um teste de mesa e complete o quadro a seguir para os seguintes valores: X =3, Y = 2, Z= , resposta: X = 150, Y=3, Z= , resposta:
function testeMesa(X,Y){
    if (typeof X !== "number" || typeof Y !== "number" || isNaN(X) || isNaN(Y)) {
        console.log("Entrada inválida! Digite apenas números.");
        return;
    }
    let Z = (X*Y)+5;
    let resposta;

    if (Z <= 0) {
        resposta = 'A';
    } else if (Z <= 100) {
        resposta = 'B';
    } else {
        resposta = 'C';
    }
    console.log(`Z = ${Z}, Resposta = ${resposta}`);
}
testeMesa(3,2)
testeMesa(150,3)
testeMesa("abc")

21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. 
function horaXadrez(inicio, fim) {    
    if (inicio < 0 || inicio > 23 || fim < 0 || fim > 23) {
        console.log("Erro: Horário inválido! Digite valores entre 0 e 23.");
        return;
    }
    let duracao;
    if (fim >= inicio) {
        duracao = fim - inicio;
    } else {
        duracao = (24 - inicio) + fim;
    }
    console.log(`Duração do jogo: ${duracao} horas.`);
}
horaXadrez(10, 15);
horaXadrez(22, 4);
horaXadrez(18, 18);
horaXadrez(24, 55);

22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). 
function jornadaTrabalho(horasMes,salarioHora) {    
    if (typeof horasMes !== "number" || typeof salarioHora !== "number" || isNaN(horasMes) || isNaN(salarioHora)) {
        console.log("Entrada inválida! Digite apenas números.");
        return;
    }
    let jornadaMensal = 40 * 4; // 160 horas no mês
    let salarioBase = salarioHora * horasMes;
    let horasExtras = Math.max(0, horasMes - jornadaMensal); // Apenas horas extras
    let valorHoraExtra = salarioHora * 1.5; // 50% a mais por hora extra
    let extraReceber = horasExtras * valorHoraExtra;
    let salarioTotal = (salarioHora * jornadaMensal) + extraReceber; // Soma base + extra

    console.log(`Total de horas trabalhadas: ${horasMes}`);
    console.log(`Total de horas extras: ${horasExtras}`);
    console.log(`Valor recebido por horas extras: R$ ${extraReceber.toFixed(2)}`);
    console.log(`Salário total a receber: R$ ${salarioTotal.toFixed(2)}`);

}
jornadaTrabalho(200,8);
jornadaTrabalho(160,8);
jornadaTrabalho("abc");

23) Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém erros, identifique os erros no algoritmo apresentado abaixo: Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: - para sexo masculino: peso ideal = (72.7 * altura) - 58 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 inicio ler nome ler sexo se sexo = M então peso_ideal (72.7 * altura) - 58 senão peso_ideal (62.1 * altura) – 44.7 fim_se escrever peso_ideal fim
function calcularPesoIdeal(altura, sexo) {
    if (typeof altura !== "number" || isNaN(altura)) {
        console.log("Entrada inválida! Digite um número válido para a altura.");
        return;
    }
    if (sexo !== 'M' && sexo !== 'F') {
        console.log("Entrada inválida! O sexo deve ser 'M' ou 'F'.");
        return;
    }
    let pesoIdeal;    
    if (sexo === 'M') {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    console.log(`O peso ideal para uma pessoa de sexo '${sexo}' e altura ${altura.toFixed(2)}m é: ${pesoIdeal.toFixed(2)} kg`);
}
calcularPesoIdeal(1.60, "M");
calcularPesoIdeal(1.69, "F");
calcularPesoIdeal("abc", "M");

24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total. 

25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 

26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.

*/
function calcularPesoIdeal(altura, sexo) {
    if (typeof altura !== "number" || isNaN(altura)) {
        console.log("Entrada inválida! Digite um número válido para a altura.");
        return;
    }
    if (sexo !== 'M' && sexo !== 'F') {
        console.log("Entrada inválida! O sexo deve ser 'M' ou 'F'.");
        return;
    }
    let pesoIdeal;    
    if (sexo === 'M') {
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    console.log(`O peso ideal para uma pessoa de sexo '${sexo}' e altura ${altura.toFixed(2)}m é: ${pesoIdeal.toFixed(2)} kg`);
}
calcularPesoIdeal(1.60, "M");
calcularPesoIdeal(1.69, "F");
calcularPesoIdeal("abc", "M");
