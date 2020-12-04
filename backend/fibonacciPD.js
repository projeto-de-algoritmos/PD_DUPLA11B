v[200000];

function fibonacciDP(num){

    if(num == 0 || num == 1){
        return num;
    }

    if(v[num] != -1){
        return v[num];
    }

    res = fibonacciDP(num - 1) + fibonacciDP(num - 2);

    v[num] = res;
    return res;

}