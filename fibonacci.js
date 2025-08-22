// Iteration method
function fibs(n) {
    if (n === 0) return [0]
    if (n === 0) return [0, 1];

    let result = [0, 1];
    for(let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

// Recurssion method
function fibsRec(n) {
    if (n === 0) return[0];
    if (n === 1) return [0, 1];

    let arr = fibsRec(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}
console.log(fibsRec(7)); // [0, 1, 1, 2, 3, 5, 8, 13]