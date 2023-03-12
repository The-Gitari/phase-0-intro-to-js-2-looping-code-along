// Code your solutions in this file
const writeCards = (arg1,arg2) => {

    const messages = []
   for (let i = 0; i < arg1.length; i++) {
       const newMessage = `Thank you, ${arg1[i]}, for the wonderful ${arg2} gift!`;

       messages.push(newMessage);
     }
     return messages;
}
//second lab 

function countDown(){

let countDown = 10;

while (countDown >= 0) {
console.log(countDown--);
}
}
