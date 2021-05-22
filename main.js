
// let resilt;

// function getResult (estimation  , task) {



//     if (estimation > 90 || task > 10) {

//         return  100 ; 
        
      
//     }else if (estimation > 75 && task >= 5) {

//         return  90 ; 

//     }else if (estimation > 50  &&  task > 2 ) {
        
//         return 75 ; 

//     } else {

//         return 0 ;
//     }


// }

// resilt = getResult (100  , 12) ;

// console.log(`Ваша оценка : ${resilt}`);

// resilt = getResult (99  , 0) ;

// console.log(`Ваша оценка : ${resilt}`);

// resilt = getResult (10  , 15) ;

// console.log(`Ваша оценка : ${resilt}`);

// resilt = getResult (85 , 5) ;

// console.log(`Ваша оценка : ${resilt}`);

// resilt = getResult (55  , 3) ;

// console.log(`Ваша оценка : ${resilt}`);


// resilt = getResult (55  , 0) ;

// console.log(`Ваша оценка : ${resilt}`);




// resilt = getResult (20  , 2) ;

// console.log(`Ваша оценка : ${resilt}`);



// Напишите функцию, которая принимает строку и из строчных букв делает прописные, а прописные - строчными.


// function checkString (string) {

//     let newString = "";

//     let long = string.length;
   
//     for(let i = 0 ; i < long ;  i ++ ) {

//         if(string[i] === string[i].toLowerCase()) {

//             newString += string[i].toUpperCase();
//         }else {
//             newString += string[i].toLowerCase();
//         }

//     }

//     return newString ; 


// }
  

//  let result = checkString("hello My FrIend");

// console.log(result);


// Вы пишите код для правильно работы светофоров на дорогах вашего города, поэтому напишите функцию, которая будет принимать в себя текущий цвет светофора,
//  а возвращать цвет, в который он должен перейти.
//  Учитывайте то, что после красного, всегда загорается зеленый, а после зеленого желтый, а затем красный.

//  function light (color) {


//     if(color === "Красный") {
//         return  "Зеленый";
//     }else if (color === "Зеленый") {
//         return  "Желтый";
//     }else if (color === "Желтый") {

//         return "Красный";
//     }else {
//         alert ("Необходимо ввести цвет светофора")
//     }
//  }


// console.log(light("Зеленый"));


// console.log(light("Желтый"));


// console.log(light("Красный"));




// // У вас в доме была банка малинового варенья. Когда вы заболели, то решили найти эту банку, чтобы полечиться. 
// // Но банка оказалась пуста! Необходимо найти воришку. Напишите функцию, возвращает сообещние о том, кто съел варенье. Если функция получает на вход строку, 
// // то она возвращает 'Кто съел варенье? Это была Юля!' Если число, то 'Кто съел варенье? Это был Дима!',
// //  ну а если булевое значение, то 'Варенье съел наш пёс!'. Пустых строк функция принимать не будет.'


// function  findBadpersone (value) {


//     if (typeof value ===  "string") {
//         console.log('Кто съел варенье? Это была Юля!')
//     }else if ( typeof value ===  "number") {
//         console.log('Кто съел варенье? Это был Дима!')
//     }else if ( typeof value) {
//         console.log('Варенье съел наш пёс!')
//     }else {
//         console.log( 'Варенье съел наш пёс!')
//     }
// }

// findBadpersone('Машина')
// findBadpersone(26) 
// findBadpersone(1.24) 
// findBadpersone(false)
// findBadpersone(true)



// Верните тип суммы двух аргументов. Функция должна возвращать тип данных: Строка.'


// function  typeOfSum (value1 , value2) {
//     let sum  = value1 + value2;

//     console.log( typeof sum );
// }


// typeOfSum(12, 1) 
// typeOfSum('d', 1)
// typeOfSum(1, 'a') 
// typeOfSum('dd', '') 
// typeOfSum(true, 1) 
// typeOfSum('s', false)
// typeOfSum(null, 1) 
// typeOfSum('s', null) 
// typeOfSum(null, undefined) 
// typeOfSum(undefined, 're')
// typeOfSum(undefined, true)
// typeOfSum(null, false)



// // Напишите функцию, которая принимает в себя массив, а возвращает произведение элементов массива, умноженных по порядку друг на друга.


// function checkArray (array) {

//     let res ;

//         res = array.reduce((previousValue, currentValue) => {

//             return  currentValue * previousValue

//         });

//     return res ;
    

// }


// let result = checkArray([1, 2, 3, 4]);


// console.log(result);



// На старте вы получаете массив. Необходимо написать функцию, которая будет возвращать массив удвоенных значений исходного массива.



// function checkArray (array) {

//     let result ;

//     result = array.map((item) => item * 2)

//     return result
// }



// console.log(checkArray([1, 2, 3]));
// console.log(checkArray([4, 1, 1, 1, 4]));
// console.log(checkArray([2, 2, 2, 2, 2, 2])); 




// Напишите функцию, которая принимает в себя год и возвращает век, в котором он находится.


// function centry (year) {

//     if (year >= 1700 && year < 1800 ) {
        
//         return "18 век";

//     }else if (year >= 1600 && year < 1700) {

//         return "17 век";

//     }else if (year >= 1900 && year < 2000) {
        
//         return "19 век"

//     }else if (year > 1  && year < 100) {

//         return "1 век"
//     }

// }


// let vek = centry(1705) 


// console.log(`Значит у нас : ${vek}`);

// vek = centry(1601) ;

// console.log(`Значит у нас : ${vek}`);

// vek = centry(1900) ;

// console.log(`Значит у нас : ${vek}`);

// vek = centry(81) ;

// console.log(`Значит у нас : ${vek}`);




// Напишите функцию, которая будет принимать в себя массив c именами, и возвращать массив, но уже с удаленными нежелательными именами.
//  Массив с нежелательными именами должен быть внутри вашей функции:
 
 
//  function deliteName (array) {

//  const unwantedNames = ["Дима", "Саша", "Ольга", "Никита"];

// for (var i = 0; i<unwantedNames.length; i++) {
//     let  arrlen = array.length;
//     for (let j = 0; j<arrlen; j++) {
//         if (unwantedNames[i] === array[j]) {
//             array = array.slice(0, j).concat(array.slice(j+1, arrlen));
//         }
//     }

//     return array

// }


//  }


//  console.log( deliteName (['Никита', 'Саша', 'Анастасия', 'Дима', 'Саныч', 'Ольга',]));

// Напишите функцию, которая принимает в себя строку цифр и возвращает строку,

// где любая цифра ниже 5 заменяется на 0, а любая цифра от 5 и выше заменяется на 1.


// function result (string) {

//     let res =  "" ;

//     for (let i = 0 ; i < string.length ; i++) {
        
//         if(string[i] < 5) {

        
//             res += 0
//         }else {
//             string[i] = "1"
            
//             res += 1
//         }
//     }

//     return res;
// }

// let createString = result('45385593107843568');

// console.log( (createString));


// Напишите функцию, которая принимает в качестве параметров массив и значение и проверяет, есть ли это значение в массиве.
//  Если есть, то она возвращает строку 'Да, значение x есть в массиве'.
//  Если значения нет, то возвращает 'Нет, такого значения нет'.

// function checkArray (array , value) {
  
  
//     let newArray = array.filter (item => item === value)


//     if (newArray[0] === value) {
        
//         console.log(`Значение ${value} есть в массиве`)

//     } else {
//         console.log("Такова значения нету в массиве")
//     }

// }



// checkArray([ 101 ,66 ], 66);

// checkArray([80, 117, 115, 104, 45, 85, 112, 115], 45);
// checkArray(['t', 'e', 's', 't'], 'e');
// checkArray(['what', 'a', 'great', 'sss'], 'kat');




// // Напишите функцию, которая принимает в качестве параметра строку, содержащую имя и фамилию человека,
// // а возвращает инициалы, разделенные точкой.


// function getInitial  (string) {

//     let TransformationString  = string.split(" ") ;

//     let res = (`${TransformationString[0][0]}.${TransformationString[1][0]}`);

//     return res;
// }



// console.log (getInitial("Сергей Семёнов"));
// console.log (getInitial("Анастасия Черданцева"));
// console.log (getInitial("Горинов Максим"));




