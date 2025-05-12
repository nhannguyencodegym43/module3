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
var arr = [];
var count = 0;
for (var i = 0; i < 40; i++) {
    if (isPrime(i)) {
        count++;
        arr.push(i);
    }
    if (count === 30)
        break;
}
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
alert(sum);
