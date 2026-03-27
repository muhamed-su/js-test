var test = Number(prompt("введи баллы за тест 0-50"))
var homework = Number(prompt("введи баллы за дз 0-30"))
var poseshaemost = Number(prompt("введи баллы за посещаемость 0-20"))

if (isNaN(test) || isNaN(homework) || isNaN(poseshaemost)) {
    console.log("это не число не цифра введи только цифру или число");
    // alert("это не число не цифра введи только цифру или число");
}
else if (test < 0 || homework < 0 || poseshaemost < 0) {
    console.log("не пиши отрицательные баллы");  
    // alert("не пиши отрицательные баллы");  
}
else if (test > 50 || homework > 30 || poseshaemost > 20) {
    console.log("ты превысил максимальный балл");
    // alert("ты превысил максимальный балл");
}
else{
    var total = test + homework + poseshaemost
    var ball
    if (total >= 90 && total <= 100) {
        ball = "отлично"
    } else if (total >= 75 && total <= 89) {
        ball = "хорошо"
    } else if (total >= 60 && total <= 74) {
        ball = "Удовлетворительно"
    } else if (total <= 59){
        ball = "Неудовлетворительно"   
    }
    console.log("общий балл", total);
    console.log("баллы", ball);
}


var numbers = [5, 12, 8, 130, 44, 2, 9];

var sum = 0
var max = numbers[0]
var min = numbers[0]
var count = 0

for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i]
    sum += num

    if (num > max){
        max = num
    } if (num < min){
        min = num
    } if ( num > 10 ){
        console.log(num);
        count++
    }
}

console.log("sum", sum);
console.log("макс", max);
console.log("минимум", min);
console.log("всего чисел больше 10", count);



