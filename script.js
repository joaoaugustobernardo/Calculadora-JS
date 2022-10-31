// função calcCacl ela vai ser chamada pela função calcParse.
//calcParse(‘resultado’) vai ser chamada e algoritmo detecta que havia uma operação gravada anteriormente 
//(jsomas = somar) e executa a função que foi nela estabelecida se foi soma ela sera 
//CalcCalc(soma e os numeros que estão em operações). 
//exempo CalcCalc (soma 10,5) o resultado sera 15.
// as variaveis gsoma e gvalor se refere ao valor anterior do operador
//tentando explicar o que acontece do usuario/programador.



function calcNumber(num) { //adiciona os números no Visor
   if (typeof jvisor == 'undefined') { //A função CalcNumber ira ser acionada quando clicar no numeros ou .
      document.calcform.visor.value = '';//Concatenando os numeros no visor da calculadora.
   }
   document.calcform.visor.value = document.calcform.visor.value + num;
   jvisor = 1;
}

// Função que limpa a calculadora e todas as variáveis existentes.
function calcLimpar() {// clicando no AC limpa o campo portanto apagando o visor da calculadora e todas outras 
document.calcform.visor.value = ''; // variaveis tipo seria um apagar o cache. "Limpar"
   delete jvalor;
   delete jsomas;
   delete jvisor;
}

// executa as operações  da calculadora
function calcCalc(somas, valor1, valor2) { // Clicando no + - * / a função calcParse vai decidir o que a operação que
if (somas == "somar") { // usuario deseja operar + ou - ou *.
      var valor = parseFloat(valor1) + parseFloat(valor2);
   } else {
      if (somas == "subtrair") { // clicando na na operação a calcParse sera chama e sua operação que está nela (subtrair).
         var valor = valor1 - valor2;
      } else {
         if (somas == "multiplicar") {
            var valor = valor1 * valor2;
         } else {
            var valor = valor1 / valor2; 
         } if( somas == "porcentagem"){
            var valor = valor1 / 100;
         } 
      }
   }

   return(valor);
}

// Função do algoritmo de "passagem" das ações do usuário
function calcParse(somas) {
   var valor = document.calcform.visor.value;
   delete jvisor;

   if (typeof jsomas != 'undefined' && somas == 'resultado') {
      jvalor = calcCalc(jsomas, jvalor, valor);
      document.calcform.visor.value = jvalor;
      delete somas;
      delete jvalor;
      return(0);
   }

   if (typeof jvalor != 'undefined') {
      jvalor = calcCalc(gsomas, jvalor, valor);
      jsomas = somas;
      document.calcform.visor.value = jvalor;
   } 
   else {
      jvalor = valor;
      jsomas = somas;
   }

}