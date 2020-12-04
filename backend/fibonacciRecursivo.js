function fibonacciRecursivo(num){

    if(num == 0 || num == 1){
        return num;
    }
    
    return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2);

}

module.exports = fibonacciRecursivo;