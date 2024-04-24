// establishing the number, even, odd array 


const numbers = [];
// numbers adding to the bank 
function addNumber2Bank() {
    const addNum = document.getElementById("addednumber").value;
    numbers.push(addNum);
    document.getElementById("bank").innerHTML = numbers; 
    return false; 
}
const odds = [];
const evens = []; 

function sortOne() {
    const sort = numbers.shift();
    if (sort % 2 === 0) {
        evens.push(sort);
        document.getElementById("evenNumber").innerHTML = evens; 
    } else {
        odds.push(sort);
        document.getElementById("oddNumber").innerHTML = odds; 
    }
}


function sortAll() {
    for (let i=0; i <= numbers.length; i++) {
    const sortEverything = numbers.shift();
        
    if (sortEverything % 2 === 0) {
        evens.push(sortEverything);
        document.getElementById("evenNumber").innerHTML = evens; 
    } else {
        odds.push(sortEverything);
        document.getElementByID("oddNumber").innerHTML = odds; 
    }
  }
  return false; 
}