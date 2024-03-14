// let arr = [1,2,3,4,5,6,7,8,9];
// let arr2 = ['olma', 'anor', 'behi', 'nok', 'shaftoli'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);   
// }

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let str = [];
// for (let el of arr) {
//     console.log(el);
//     if (el <= 5) {
//         str.push(el);
//     }
// }

// console.log(str, 'str qiymati');


// let res = [];

// for (let el of arr) {
//     if (el % 3 !== 0) {
//         res.push(el);
//     }
// }

// console.log(res);

// let arr2 = ['non', 'arra', 'tut', 'asa', 'dad', 'salom', 'mars'];

// console.log(arr2[5].split('').reverse().join(''));
// for (let element of arr2) {
//     if (element.split('').reverse().join('') === element) {
//         console.log('ha palindrom sozlar bor');
//     } else {
//         console.log('bunday soz yoq');
//     }
// }

let isPalindromArr = ['non', 'olma', 'aziza', 'Gul', 'mashina'];

let palindroms = [];
let nonPalindroms = [];

for (let i = 0; i < isPalindromArr.length; i++) {
    let word = isPalindromArr[i].toLowerCase(); 
    let reversedWord = word.split('').reverse().join(''); 

    if (word === reversedWord) {
        palindroms.push(isPalindromArr[i]); 
    } else {
        nonPalindroms.push(isPalindromArr[i]); 
    }    
}

console.log("Palindromlar:", palindroms);
console.log("Palindrom emas so'zlar:", nonPalindroms);