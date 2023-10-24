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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    
    let soma = 0
    let arrayNum = []
    let somas = []
    
    for (let i = 0; i < 5; i++){
        var a = arr[i];
        arrayNum.push(a);
    }
    
    
    for (let i = 0; i < 5; i++){
        const rai = arrayNum.slice()
        rai.splice(i,1)
        for (let i = 0; i < 4; i++){
            soma += rai[i]
        }

        somas.push(soma)
        soma = 0
    }
    somas.sort(compare)
    console.log(`${somas[0]} ${somas[4]}`)
    
    

}

function compare (a,b) {
    return a-b
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
