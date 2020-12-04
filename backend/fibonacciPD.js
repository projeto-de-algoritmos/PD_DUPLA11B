var v = Array(200000).fill(-1);

function fibonacciDP(num) {
   

    if (num == 0 || num == 1) {
        return num;
    }

    if (v[num] != -1) {
        return v[num];
    }

    var res = fibonacciDP(num - 1) + fibonacciDP(num - 2);

    v[num] = res;
    return res;
}

module.exports = fibonacciDP;