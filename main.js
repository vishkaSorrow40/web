/* ----------------------------------- first---------------------------------------*/

// let skmCh,smSec;
// let number = prompt('Если вы хотите превести км/ч в м/с введите 1, если наоборот 0');
// if (number){
//     skmCh=prompt("Введите значение скорости :");
//     console.log(skmCh/3.6 + "м/с");
// }
// else{
//     smSec=prompt('Введите значение скорости :');
//     console.log(smSec*3.6 + "kм/сh");
// };



/* -----------------------------------second---------------------------------------*/

/*let a, b, c;
let P, S;
a=prompt("Введите значение старон треульника. 1");
b=prompt("2");
c=prompt("3");
if((+a)+(+b) > (+c) && (+a)+(+c)>(+b) && (+b)+(+c)>(+a) ){
    console.log("Такой треугольник есть");
    P=(+a)+(+b)+(+c);
    console.log("Периметр треугольника = "+ P );
    S=Math.sqrt((P/2)*((P/2)-(+b))*((P/2)-(+c))*((P/2)-(+a)));
    console.log("Площадь треугольника = " +S);

}
else{
    console.log("Такого треугольника не существует!!");
};*/


/* -----------------------------------third---------------------------------------*/

/*let number;
number = prompt("Введите число ");

for (i = 0; i<=number; i++){
        if(i == 0){
        console.log(i +' '+"buzz");
    }
    else{
        if(i%5 == 0){
            console.log(i +' '+"fizz buzz");
        }
        else{
            if(i%2 ==0 ){
                console.log(i +' '+"buzz");
            }
            else{
                console.log(i+" " + "fizz");
            }
        };
    };
}*/


/* -----------------------------------fourth---------------------------------------*/

/*let star="*", hesh="##";
console.log(">");
console.log(star);
console.log(hesh);
for(i=0; i<=9; i++){
    if(i%2==0){
        star += '**';
        console.log(star);
    }
    else{
        hesh+='##';
        console.log(hesh);
    };
};
console.log('| |')
*/

/* -----------------------------------fifth---------------------------------------*/

/* 
let chislo=103, p=1;
while(p){
    number=prompt("Попробуй угадать число");
    if(number == undefined || number == 0 || number == ' ' || number == Infinity || number == NaN){
        console.log("Убедитесь, что ввели чило!");
    }
    else{ 
        if(number>chislo){
            console.log("ваше число больше");
        }
        else{
            if(number<chislo){
                console.log("ваше число меньше");
            }
            else{
                if(number==chislo){
                    console.log("Победа");
                    p=0;
                }
            };
        };
    };
}
*/
/* -----------------------------------sixth---------------------------------------*/