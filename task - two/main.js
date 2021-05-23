// домашнее задание:

// - написать ф-цию, которая принимает в качестве параметра  массив чисел, фильтрует его и возвращает массив нечетных чисел [1, 2, 3] -> [1, 3]

const array = [1,2,3,4,5,6,7,8,9,10];

function makeNewArray (array) {

  let  res = [];

  for (let i = 0 ; i < array.length ; i++) {

    if(array[i] % 2 === 1) {
      
      res.push(array[i]);

    } else {

      continue
    }

  }

  return res ;

}

 let result = makeNewArray(array);

 console.log(result)

//  - написать ф-цию, которая принимает в качестве параметра массив чисел и возвращает массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16]

 function  squareNumber (array) {

    let res = [];

    for(let i = 0 ; i <array.length ; i++) {

      res.push(array[i]*2)
    }

    return res;
 }

 let resSquare = squareNumber(array);

 console.log(resSquare);
 


//  - написать функцию, которая в качестве параметра принимает массив с разными типами данных. возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет.

const arrayHaveString = [1,2,"Alex",4,5,6,8,10];

function validationValue (array) {

  let res;

  for(let i = 0 ; i < array.length ; i++ ) {

    if( typeof array[i] === "string" ) {

      res = true

      break;

    } else {

      res = false;
    }

  }

  return res;
}

let res = validationValue(arrayHaveString);

console.log(res);

