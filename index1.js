//  Question 1


function reverseString(str) {
   return str.split('').reverse().join('');
}
console.log(reverseString("Abdullah"));

// Question 2



function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Abdullah"));  

// second way

function countVowels1(str) {       
  const vowels = "aeiouAEIOU";   
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels1("Abdullah"));

// Question 3

function sumPositive(arr) {
    return arr.filter(x => x > 0)        // x= accu   y= current  
    .reduce((x, y) => x + y , 0)
              
}
console.log(sumPositive([1, -4, 7, 12])); 


// Question 4

function filterNumbers(arr, type) {
  if (type === "even") {
    return arr.filter(num => num % 2 === 0);
  } else (type === "odd"); {
    return arr.filter(num => num % 2 !== 0);
  } 
}

console.log(filterNumbers([1, 2, 5, 6, 9]));

// Question 5

function flatArray(arr) {
  return arr.flat();
}

console.log(flatArray([1, [2, 3], [4, 5], 6]));

// Question 6

function removeDuplicate(num) {
    let unique = [];
    for (let i = 0; i < num.length; i++) {
        if (!unique.includes(num[i])) {
            unique.push(num[i]);
        }
    }
    console.log(unique);
}

// second way

function removeDuplicate(arr) {
  return [...new Set(arr)];         // set removes duplicate automatically
}


// Question 7

function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
console.log(longestWord("this is my laptop"));

// Question 8


function commonElement1(array1, array2) {
  let common = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      common.push(array1[i]);
    }
  }

  return common;
}
console.log(commonElement1([1, 2, 4], [2, 4, 5]));

// second way

function commonElement(arr1, arr2) {
  return [...new Set(arr1.filter(item => arr2.includes(item)))];
}
console.log(commonElement([1, 2, 4], [2, 4, 5]));


