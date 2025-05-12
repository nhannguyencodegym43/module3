function isPrime2(n: number) {
    let prime: boolean = true;
    if (n === 2) {
        prime = true;
    }
    if (n <= 1 || (n % 2 === 0 && n !== 2)) {
        prime = false;
    }
    for (let i: number = 3; i <= Math.sqrt(n); i=i+2) {
        if (n % i === 0) {
            prime = false;
        }
    }
    return prime;
}
let arr1: number[] = [-2, 3, 5, 1, -7, 2];
let sum2: number = 0;
for (let i: number = 0; i < arr1.length; i++) {
    if (arr1[i] >= 2) {
        if (isPrime2(arr1[i])) {
            sum2 += arr1[i];
        }
    }
}
alert(sum2);