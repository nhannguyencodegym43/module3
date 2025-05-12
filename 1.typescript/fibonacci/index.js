var fibonacci = [0, 1];
var sum1 = 1;
for (var i = 0; i < 10; i++) {
    var next_num = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(next_num);
    sum1 += next_num;
}
alert(sum1);
