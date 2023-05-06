// Code your solutions in this file

let arr = [];
function writeCards(name, reason){
    name.forEach(element => {
        arr.push(`Thank you, ${element}, for the wonderful ${reason} gift!`);
    })
    return arr;
}

function countDown(num){
    while (0 <= num){
        console.log(num);
        num--;
    }
}