'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr, n) {
    
    let arrayNum = []

    let zero = 0
    let menor = 0
    let maior = 0
    
    const quantidade = n;
    
    for (let i = 0; i < quantidade; i++){
        var a = arr[i];
        arrayNum.push(a);
    }
    
    for (let i = 0; i < quantidade; i++){
        if (arrayNum[i] == 0){
            zero++
        } else if (arrayNum[i] < 0){
            menor++
        } else if (arrayNum[i] > 0 ){
            maior++
        }
    }
    
    let out = arrayNum.length
    console.log((maior/ out).toFixed(6))
    console.log((menor / out).toFixed(6))
    console.log((zero / out).toFixed(6))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr, n);
}
