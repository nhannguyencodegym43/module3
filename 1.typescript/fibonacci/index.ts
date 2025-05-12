let fibonacci: number[] = [0, 1];
let sum1: number = 1;
for (let i = 0; i < 10; i++) {
    let next_num: number = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(next_num);
    sum1 += next_num;
}
alert(sum1);