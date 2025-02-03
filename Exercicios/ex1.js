/*
1. FaÃ§a o algoritmo para calcular a Ã¡rea (AREA) e o perÃ­metro (P) de uma sala retangular,
sendo que as dimensÃµes da sala (L e C) sÃ£o fornecidas pelo usuÃ¡rio.
Apresente a Ã¡rea e o perÃ­metro depois de calculados.

function calcArea (num1,num2){
    area = num1*num2;
    perimetro = 2 * (num1+num2);

    console.log('A Ã¡rea Ã© igual a: ' + area)
    console.log('O perimetro Ã© igual a: ' + perimetro)
}

calcArea(10,10);

2. FaÃ§a o algoritmo que calcule a idade de uma pessoa,
sendo que o ano atual (AA) e o ano do nascimento da pessoa (AN) sÃ£o fornecidos pelo usuÃ¡rio.
(considere que a pessoa jÃ¡ fez aniversÃ¡rio nesse ano). Apresentar a idade da pessoa depois de calculada.


function calcIdade (AA,AN){
    let idade = AA - AN;
    console.log('Sua idade Ã©: '+idade);
}

calcIdade(2025,1993);

3. FaÃ§a o algoritmo que calcule o valor em Reais (VAL_REAL), correspondente aos dÃ³lares que um turista possui no cofre do hotel. O programa deve solicitar os seguintes dados: Quantidade de dÃ³lares guardados no cofre (VAL_DOLAR) e cotaÃ§Ã£o do dÃ³lar naquele dia (COT).


function cotacao(VAL_DOLAR,COT){
    let VAL_REAL = VAL_DOLAR * COT;
    console.log('Valor em Reais: '+VAL_REAL);
}

cotacao(100,6.23);

4. FaÃ§a o algoritmo para calcular o valor monetÃ¡rio do desconto (D),
sendo que o preÃ§o do produto (PR) Ã© fornecido pelo usuÃ¡rio e o desconto Ã© de 5%.
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

5. FaÃ§a o algoritmo para calcular quanto serÃ¡ pago por um produto (PAG),
sendo que o preÃ§o do produto (PR) e o desconto (D), em porcentagem,
sÃ£o fornecidos pelo usuÃ¡rio. Apresentar o valor a ser pago pelo produto.

function totalProd (valorProd,desconto){
    let totalProduto;
    let totalDesc;

    if ((valorProd <= 0) || (desconto <= 0)){
        console.log('Valor Ã­nvalido, insira apenas nÃºmeros positivos.')
        return;
    }
    totalDesc = (valorProd*desconto)/100;
    totalProduto = valorProd - ((valorProd*desconto)/100);
    console.log('Valor do item: '+valorProd);
    console.log('Desconto: '+totalDesc);
    console.log('Total a pagar: '+totalProduto);
}
totalProd(100,5)

6. FaÃ§a o algoritmo para calcular qual foi a porcentagem de desconto dada em um determinado produto (DESC),
(PRECO) e o preÃ§o que foi cobrado por ele depois do desconto (PRECOF) sÃ£o fornecidos pelo usuÃ¡rio.

function porcentagemDesconto (preco,precodes){
    let desconto;
    let porcem;

    if (precodes <= 0 || preco <=0){
        console.log("Valor invalido, preÃ§o e desconto devem ser positivos!")
        return;
    }
    desconto = preco - precodes;
    porcem = ((desconto/preco)*100);

    console.log('Valor do item: '+preco);
    console.log('Desconto: '+porcem);
    console.log('Total a pagar: '+precodes);
    
}

porcentagemDesconto(100,90);


7. FaÃ§a o algoritmo que receba do usuÃ¡rio uma temperatura em graus Farenheit (F) e a transforme em graus Celsius (C). A fÃ³rmula Ã© C = 5/9 (F â€“ 32).
function farenheitparaCelcius(faren){
    let celcius;
    celcius = (5/9)*(faren-32);
    console.log('A tamperatura '+faren+' convertida para Celsius Ã©: '+celcius.toFixed(1)+'Â°')
}
farenheitparaCelcius(100)



8. FaÃ§a o algoritmo que calcule a quantidade de tijolos iguais (QTD)
necessÃ¡rios para construir uma determinada parede.
SÃ£o dados de entrada do programa: dimensÃµes do tijolo (altura â€“ AT e largura â€“ LT)
e dimensÃµes da parede a ser construÃ­da (altura â€“ AP e largura â€“ LP).

function previsaoConstrucao(alturaTijolo,larguraTijolo,alturaParede,larguraParede){    
    const medis = [alturaParede,larguraParede, alturaTijolo, larguraTijolo]

    if (medis.some((v)=> typeof v !== "number")){
        console.log("Entrada invalida, por favor insira valores numÃ©ricos.")
        return;
    }  

    let areaTijolo = alturaTijolo*larguraTijolo;
    let areaParede = alturaParede*larguraParede;
    total = areaParede/areaTijolo;
    console.log("A quantidade aproximada de tijolos para construir uma parede de "+areaParede+"mÂ² Ã© de: "+total);
}
previsaoConstrucao(5,2,10,10);

14) Ler um valor e escrever a mensagem Ã‰ MAIOR QUE 10! se o valor lido for maior que 10, caso contrÃ¡rio escrever NÃƒO Ã‰ MAIOR QUE 10! 

function maiorDez(n){
    if (n>10){
        console.log(`${n} Ã© maior que DEZ!`)
    } else {
        console.log(`${n} nÃ£o Ã© maior que DEZ!`)
    }
}
maiorDez(12)

15) Ler um valor e escrever se Ã© positivo ou negativo (considere o valor zero como positivo). 
function positivoNegativo(n){
    if (typeof n !== "number"){
        console.log ("Entrada invalida, por favor digite um numÃ©ro")
        return
    }

    if (n >= 0){
        console.log(`${n} Ã© um numÃ©ro positivo!`)
    } else {
        console.log(`${n} Ã© um numÃ©ro negativo!`)
    }
}
positivoNegativo(12)
positivoNegativo(-10)
positivoNegativo("abc")

16) As maÃ§Ã£s custam R$ 1,30 cada se forem compradas menos de uma dÃºzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o nÃºmero de maÃ§Ã£s compradas, calcule e escreva o custo total da compra. 
function compasDesc(n){
    if (typeof n !== "number" || isNaN(n)){
        console.log("Entrada invÃ¡lida! Por favor, digite um nÃºmero.")
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

17) Ler as notas da 1a. e 2a. avaliaÃ§Ãµes de um aluno. Calcular a mÃ©dia aritmÃ©tica simples e escrever uma mensagem que diga se o aluno foi ou nÃ£o aprovado (considerar que nota igual ou maior que 6 o aluno Ã© aprovado). Escrever tambÃ©m a mÃ©dia calculada. 
function notaMedia(nota1,nota2){
    media = (nota1+nota2)/2
    if (media >=6){
        console.log(`MÃ©dia: ${media}, Aluno aprovado!`)
        return;
    } else {
        console.log(`MÃ©dia: ${media}, Aluno reprovado!`)
        return;
    }
}
notaMedia(6,6);
notaMedia(6,5);

18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderÃ¡ ou nÃ£o votar este ano (nÃ£o Ã© necessÃ¡rio considerar o mÃªs em que a pessoa nasceu). 

function idadeVoto(anoNasc,anoAtual){
    idade = anoAtual-anoNasc;

    resul = idade >=18 ? "PoderÃ¡ Votar" : "NÃ£o tem idade suficiente para votar";

    console.log(`VocÃª ${resul}`)
}
idadeVoto(1993,2025);
idadeVoto(2010,2025);

19) Ler dois valores (considere que nÃ£o serÃ£o lidos valores iguais) e escrever o maior deles. 
function valorMaior(num1, num2) {  
    if (num1 === num2) {
        console.log("Entrada invÃ¡lida, digite valores diferentes!");
        return;
    }
    let maior = num1 > num2 ? num1 : num2; 
    console.log(`O maior valor Ã©: ${maior}`);
}
valorMaior(10, 5);
valorMaior(3, 8);

20) Ler dois valores (considere que nÃ£o serÃ£o lidos valores iguais) e escrevÃª-los em ordem crescente.
function maiorMenor(num1, num2) {  
    if (num1 === num2) {
        console.log("Entrada invÃ¡lida, digite valores diferentes!");
        return;
    }
    let maior = num1 > num2 ? num1 : num2; 
    let menor = num1 < num2 ? num1 : num2; 
    console.log(`O maior valor Ã©: ${maior}`);
    console.log(`O menor valor Ã©: ${menor}`);
}
maiorMenor(10, 5);
maiorMenor(3, 8);

27) Ler um valor e escrever se Ã© positivo, negativo ou zero. 
function positivoNegativo(n){
    switch(true){
        case (n>0):
            console.log(`${n} Ã© um valor positivo!`)
            break;
        case (n<0):
            console.log(`${n} Ã© um valor negativo!`)
            break;
        case (n==0):
            console.log(`${n} Ã© um valor neutro!`)
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

28) Ler 3 valores (considere que nÃ£o serÃ£o informados valores iguais) e escrever o maior deles. 
function trioMaior (nun1,nun2,nun3){
    if (nun1 == nun2 || nun1 == nun3 || nun2 == nun3) {
        console.log("Entrada invalida, Digite valores diferentes");
        return;
    }
    let maior = [nun1,nun2,nun3].sort((a,b) => a-b);
    console.log(O maior valor Ã©: ${maior[2]});
}
trioMaior(5,2,10)
trioMaior(45,12,10)
trioMaior(10,1,10)
29) Ler 3 valores (considere que nÃ£o serÃ£o informados valores iguais) e escrever a soma dos 2 maiores. 
function maiorSoma(nun1,nun2,nun3){
    
    if (new Set([nun1,nun2,nun3]).size !== 3){
        console.log("Entrada invalida, Digite valores diferentes");
        return;
    }
    let ordem = [nun1,nun2,nun3].sort((a,b) => a-b);
    soma = ordem[2]+ordem[1];
    console.log(A soma dos maiores Ã©: ${soma});
}
maiorSoma(10,2,8)
maiorSoma(10,24,80)
maiorSoma(10,24,10)
30) Ler 3 valores (considere que nÃ£o serÃ£o informados valores iguais) e escrevÃª-los em ordem crescente. 
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
31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triÃ¢ngulo e escrever se formam ou nÃ£o um triÃ¢ngulo. OBS: para formar um triÃ¢ngulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados. 
function verificarTriangulo(nun1,nun2,nun3){    
    arr=[nun1,nun2,nun3]
    if (!arr.every(num => typeof num === "number" && !isNaN(num))){
        console.log("Entrada invalida, Digite apenas nÃºmeros");        
    }
    let ladoA = nun2+nun3
    let ladoB = nun1+nun3
    let ladoC = nun1+nun2    
    if ( nun1 < ladoA && nun2 < ladoB  && nun3 < ladoC ){
        console.log('Ã‰ um triÃ¢ngulo.');
        return;
    } else {
        console.log('NÃ£o Ã© um triÃ¢ngulo')
    }    
}
verificarTriangulo(10,10,10);
verificarTriangulo(100,15,10);
verificarTriangulo(10,3,4);

32) Ler o nome de 2 times e o nÃºmero de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso nÃ£o haja vencedor deverÃ¡ ser impressa a palavra EMPATE. 
function jogoFutebol(timeA,golsA,timeB,golsB){    
    let time1 = [timeA,golsA];
    let time2 = [timeB,golsB];
    if (time1[1] == time2[1]){
        console.log("EMPATE!")
    } else if (time1[1] > time2[1]){
        console.log(`${time1[0]} Ã© o atual campeÃ£o do campeonato!`)
    } else {
        console.log(`${time2[0]} Ã© o atual campeÃ£o do campeonato!`)
    }           
}
jogoFutebol("Fluminense",3,"Bahia",2);
jogoFutebol("Fluminense",0,"Bahia",0);
jogoFutebol("Fluminense",1,"Bahia",2);

33) Ler dois valores e imprimir uma das trÃªs mensagens a seguir: â€˜NÃºmeros iguaisâ€™, caso os nÃºmeros sejam iguais â€˜Primeiro Ã© maiorâ€™, caso o primeiro seja maior que o segundo; â€˜Segundo maiorâ€™, caso o segundo seja maior que o primeiro. 
function tresMensagens(A,B){
    switch(true){
        case (A>B):
            console.log(`${A} Primeiro Ã© maior!`)
            break;
        case (A<B):
            console.log(`${B} Segundo Ã© maior!`)
            break;
        case (A==B):
            console.log(`NÃºmeros iguais!`)
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

34) Seja o seguinte algoritmo: inÃ­cio ler x ler y z= (x*y) + 5 se z <= 0 entÃ£o resposta â€˜Aâ€™ senÃ£o se z <= 100 entÃ£o resposta â€˜Bâ€™ senÃ£o resposta â€˜Câ€™ fim_se fim_se escrever z, resposta fim FaÃ§a um teste de mesa e complete o quadro a seguir para os seguintes valores: X =3, Y = 2, Z= , resposta: X = 150, Y=3, Z= , resposta:

*/
function jogoFutebol(timeA,golsA,timeB,golsB){    
    let time1 = [timeA,golsA];
    let time2 = [timeB,golsB];
    if (time1[1] == time2[1]){
        console.log("EMPATE!")
    } else if (time1[1] > time2[1]){
        console.log(`${time1[0]} Ã© o atual campeÃ£o do campeonato!`)
    } else {
        console.log(`${time2[0]} Ã© o atual campeÃ£o do campeonato!`)
    }           
}
jogoFutebol("Fluminense",3,"Bahia",2);
jogoFutebol("Fluminense",0,"Bahia",0);
jogoFutebol("Fluminense",1,"Bahia",2);

