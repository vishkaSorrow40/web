/*-----------------------------------------1--------------------------------------------------*/ 


/*function converSpeed(sms, number){
    if (number=='toms') {
        let n=`${sms / 3.6} м/с`;
        return(n);
    }
    else if(number=='tokmh') {
        let m=`${sms * 3.6}kм/сh`;
        return(m);
    }
    else{
        let error ="Введите корректное значение";
        return(error);
    };
}
let sms;
let number = prompt('Если вы хотите превести км/ч в м/с введите toms , если наоборот tokmh');
sms = prompt("Введите значение скорости :");
console.log(converSpeed(sms, number));*/


/*-------------------------------------------2-------------------------------------------------*/
/*function abs(number){
    if(number<=0){
        return(-number);
    }
    else{
        return(number);
    }

}

let number;
number=prompt("Введите любое число:");
console.log(abs(number));*/

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

function getrand(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let func=Math.floor(Math.random()*(max-min +1) + min)
    return(func);
    
}

let min,max;
min=prompt("Введите диапозон рандомного числа (сначала мин, потом макс)");
max=prompt();
console.log(getrand(min, max));

/*-------------------------------------------5-------------------------------------------------*/

function simpleArr( mass, number){
    
    let rand;
    let arr=new Array();
    for (let i=0; i<number; i++){
            rand=mass[getrand(0, mass.lenth)];
            arr.push(rand);
    }
    return (arr);

}

let number;
number=prompt("Введите кол-во элементов для нового массива");
let mass=[1,2,3,4,5,6,7,8,9];
console.log(simpleArr(mass, number));