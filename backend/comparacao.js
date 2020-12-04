const fibonacciPD = require('./fibonacciPD');
const fibonacciRecursivo = require('./fibonacciRecursivo');
var now = require("performance-now")


function tempoDecorrido(funcao) {
    
    var args = Array.prototype.slice.call(arguments, 1);


    // Inicia o cronômetro da análise de perfomance  
    var inicio = now()
    
    var value =  funcao.apply(null, args);
    
    // Finaliza o cronômetro
    var fim = now()
    
    
   var tempo = (fim-inicio).toFixed(6);

   
   return [tempo, value];
}




function comparacao (input){

    var [tempoFD,resultFD] = tempoDecorrido(fibonacciPD,input);
    var [tempoFR,resultFR] = tempoDecorrido(fibonacciRecursivo, input);

    return {
        recursivo: tempoFR,
        dinamico: tempoFD,
        resultado: resultFR
    }
}


module.exports = comparacao;