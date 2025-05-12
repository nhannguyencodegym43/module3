function isPrime(n) {
    var prime = true;
    if (n === 2) {
        prime = true;
    }
    if (n <= 1 || (n % 2 === 0 && n !== 2)) {
        prime = false;
    }
    for (var i = 3; i <= Math.sqrt(n); i = i + 2) {
        if (n % i === 0) {
            prime = false;
        }
    }
    return prime;
}
var arr = [-2, 3, 5, 1, -7, 2];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 2) {
        if (isPrime(arr[i])) {
            sum += arr[i];
        }
    }
}
alert(sum);
