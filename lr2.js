/*-----------------------------------------1--------------------------------------------------*/ 


/*function converSpeed(sms, number){
    if (number=='toms') {
        
        console.log(`${sms / 3.6} м/с`);
    }
    else {

        console.log(`${sms * 3.6}kм/сh`);
    };
}
let sms;
let number = prompt('Если вы хотите превести км/ч в м/с введите toms , если наоборот tokmh');
sms = prompt("Введите значение скорости :");
converSpeed(sms, number);*/


/*-------------------------------------------2-------------------------------------------------*/
/*function abs(number){
    if(number<=0){
        console.log(0-number);
    }
    else{
        console.log(number);
    }

}

let number;
number=prompt("Введите любое число:");
abs(number);*/

/*-------------------------------------------3-------------------------------------------------*/

/*let student={
    group: 211326,
    firstName: 'Виктория',
    lastName: 'Чернышова '
};

const keys=Object.keys(student);
console.log('Список свойств объекта:'+keys);
console.log('Студент '+ student.lastName + student.firstName +" учится в группе "+ student.group);*/

/*-------------------------------------------4-------------------------------------------------*/

/*function getrand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log( Math.floor(Math.random()*(max-min +1) + min));
}

let min,max;
min=prompt("Введите диапозон рандомного числа (сначала мин, потом макс)");
max=prompt();
getrand(min, max);*/

/*-------------------------------------------5-------------------------------------------------*/

function simpleArr( mass, number){
    
    let rand;
    let arr=new Array();
    for (let i=0; i<number; i++){
            rand=Math.floor(Math.random()*mass.length+1);
            arr.push(rand);
    }
    console.log(arr);

}

let number;
number=prompt("Введите кол-во элементов для нового массива");
let mass=[1,2,3,4,5,6,7,8,9];
simpleArr(mass, number);