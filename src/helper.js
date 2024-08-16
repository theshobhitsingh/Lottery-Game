export function generateTicket(n) {
     let array = new Array(n);
     for (let index = 0; index < array.length; index++) {
         array[index] = Math.floor(Math.random() * 10);
     }
     return array;
 }
 
 export function sum(array) {
     return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 }
 