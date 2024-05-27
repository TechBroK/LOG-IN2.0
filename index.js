/*var lost = "ALL_My_privious_works_are_gone";
console.log(lost)

var sum= 0;
function add(num){
  sum += 3;
}
console.log (sum);//undefined


function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}


const numbers = arrayFromRange(1, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i);
  return output;
}
console.log(arrayFromRange)

var testArr = [1,2,3,4,5,6,7];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,8))
console.log("After: " + JSON.stringify(testArr));



const number = [1, 2, 3, 4];

function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement)
      return true;
  return false;
}
console.log(includes(number, 2));



const numbers = [1, 2, 3, 4];

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element))
      output.push(element);
  return output;
}
const output = except(numbers, [4, 2]);

console.log(output);


const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
const output = move(numbers, 1, 3);

console.log(output);*/


