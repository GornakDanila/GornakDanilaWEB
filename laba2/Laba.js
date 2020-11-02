// вывод в консоль IDE vs 

'use strict';
// 1.1

function returnnumber(number) {
    return number;
}
// 1.2

function reargument(fnum, snum) {
    if (isNaN(fnum)) {
        return ("a - not a number");
    }
    else {
        if (isNaN(snum)) {
            return ("b - not a number");
        }
        else return fnum + snum;
    }
}

// 1.3

function array() {
    let myArray = [20,5,"gornak", 10,66,"danila"];
    console.log('Input data: ');
    console.log(myArray);
    let myNewArray = myArray.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log('Answer:');
    console.log(myNewArray);
}
