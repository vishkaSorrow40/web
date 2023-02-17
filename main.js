/* ----------------------------------- first---------------------------------------*/

let skmCh, smSec;
let number = prompt('Если вы хотите превести км/ч в м/с введите 1, если наоборот 0');
if (number) {
    skmCh = prompt("Введите значение скорости :");
    console.log(`${skmCh / 3.6} м/с`);
}
else {
    smSec = prompt('Введите значение скорости :');
    console.log(`${smSec * 3.6}kм/сh`);
};



/* -----------------------------------second---------------------------------------*/

let a, b, c;
let P, S;
a = prompt("Введите значение старон треульника. 1");
b = prompt("2");
c = prompt("3");
if (+(a + b) > (+c) && +(a + c) > (+b) && +(b + c) > (+a)) {
    console.log("Такой треугольник есть");
    P = +(a + b + c);
    console.log("Периметр треугольника = " + P);
    S = Math.sqrt((P / 2) * ((P / 2) - (+b)) * ((P / 2) - (+c)) * ((P / 2) - (+a)));
    console.log("Площадь треугольника = " + S);

}
else {
    console.log("Такого треугольника не существует!!");
};


/* -----------------------------------third---------------------------------------*/

let number;
number = prompt("Введите число ");

for (i = 0; i <= number; i++) {
    if (i == 0) {
        console.log(i + ' ' + "buzz");
    }
    else {
        if (i % 5 == 0) {
            console.log(i + ' ' + "fizz buzz");
        }
        else {
            if (i % 2 == 0) {
                console.log(i + ' ' + "buzz");
            }
            else {
                console.log(i + " " + "fizz");
            }
        };
    };
}


/* -----------------------------------fourth---------------------------------------*/

let star = "*", hesh = "##";
let tree = ">"
tree += '\n' + star + '\n' + hesh + '\n';
for (i = 0; i <= 25; i++) {
    if (i % 2 == 0) {
        star += '**';
        tree += star + '\n';
    }
    else {
        hesh += '##';
        tree += hesh + '\n';
    };

};
tree += '| |';
console.log(tree);


/* -----------------------------------fifth---------------------------------------*/


let chislo = 103, p = 1;
while (p) {
    number = prompt("Попробуй угадать число");
    if (number == undefined || number == 0 || number == ' ' || number == Infinity || number == NaN) {
        console.log("Убедитесь, что ввели чило!");
    }
    else {
        if (number > chislo) {
            console.log("ваше число больше");
        }
        else {
            if (number < chislo) {
                console.log("ваше число меньше");
            }
            else {
                console.log("Победа");
                p = 0;
            };
        };
    };
}



/* -----------------------------------sixth---------------------------------------*/

let chislo, x, y;
chislo = prompt("Введите число, которое хотите проверить на делимость");
x = prompt('x');
y = prompt('y');
if (chislo % x == 0 && chislo % y == 0) {
    console.log(`n =  &{chislo}, x = &{x} , y = &{y} = > true`);
}
else {
    console.log(`n =  &{chislo}, x = &{x} , y = &{y} = > falsue`);
};

/* -----------------------------------seventh---------------------------------------*/

let month;
month = prompt("Введите номер месяца");
if (month > 0 && month < 4) {
    console.log("месяц " + month + " => 1 квартал");
}
else {
    if (month > 3 && month < 7) {
        console.log("месяц " + month + " => 2 квартал");
    }
    else {
        if (month > 6 && month < 10) {
            console.log("месяц " + month + " => 3 квартал");
        }
        else {
            if (month > 9 && month < 13) {
                console.log("месяц " + month + " => 4 квартал");
            }
            else {
                console.log("error");
            };
        };
    };
};


//------------------------------------------------vtoray laba------------------------------------------




// const sum=function (a,b){

//     return a+b;

// };

