function isPrime(n: number) {
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
let arr: number[] = [];
let count: number = 0;
for (let i = 0; i < 40; i++) {
    if (isPrime(i)) {
        count++;
        arr.push(i);
    }
    if (count === 30) break;
}
let sum: number = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
alert(sum);