// 1. Create HashMap class:
const HashMap = require('./hashmaps');

// const main = () => {
//     HashMap.MAX_SIZE_RATIO = 0.5;
//     HashMap.SIZE_RATIO = 3;
//     let lor = new HashMap();

//     lor.set("Hobbit", "Bilbo");
//     lor.set("Hobbit", "Frodo");
//     lor.set("Wizard", "Gandolf");
//     lor.set("Human", "Aragorn");
//     lor.set("Elf", "Legolas");
//     lor.set("Maiar", "The Necromancer");
//     lor.set("Maiar", "Sauron");
//     lor.set("RingBearer", "Gollum");
//     lor.set("LadyOfLight", "Galadriel");
//     lor.set("halfElven", "Arwen");
//     lor.set("Ent", "Treebeard");

//     console.log(lor.get('Hobbit'));
//     console.log(lor.get('Maiar'));
//     // prints only Frodo and Sauron, first values are colliding?

//     console.log(lor);
//     // capacity seems to be 8, printed at 8
// }
// main();

// const WhatDoesThisDo = function(){
//     let str1 = 'Hello World.';
//     let str2 = 'Hello World.';
//     let map1 = new HashMap();
//     map1.set(str1,10);
//     map1.set(str2,20);
//     let map2 = new HashMap();
//     let str3 = str1;
//     let str4 = str2;
//     map2.set(str3,20);
//     map2.set(str4,10);

//     console.log(map1.get(str1));
//     console.log(map2.get(str3));
// }
// WhatDoesThisDo();
// what does this do? 
// output is 20, 10
// overall poorly written, sets keys and values as numbers...
// set str 1 to 10, str 2 to 20, then set str 3 to 10, and str 4 to 20

// 3. Understanding of Hash maps:
/*
hashmap length = 11;
hash function k mod m (???)
k is the key
Hashmap via Open Addressing
00 01 02 03 04 05 06 07 08 09 10
********************************
22 88 -- -- 04 15 28 17 59 31 10
*/

/*
hashmap length = 9;
Hashmap via Separate Chaining
00 01 02 03 04 05 06 07 08
**************************
-- 28 20 12 -- 05 15 -- 17
   19             33
   01
*/

// 4. Remove Duplicates:
// const removeDuplicates = (phrase) => {
//     let phraseArray = phrase.split('');
//     let phraseMap = new HashMap();
//     let word = '';

//     phraseArray.forEach((element) => {
//         try {
//             phraseMap.get(element);
//         }
//         catch {
//             phraseMap.set(element, element);
//             word += element;
//         }
//     });

//     console.log(word);
// }
// removeDuplicates('google all that you can think of');

// const removeDuplicates2 = (phrase) => {
//   let phraseArray = phrase.split('')
//   let word = ''
//   let tempWords = []

//   phraseArray.forEach(letter => {
//     if(!tempWords.includes(letter)) {
//       tempWords.push(letter)
//       word += letter
//     }
//   })
//   console.log(word)
// }
// removeDuplicates2('google')

// 5. Permutation a palindrome
// given a string acecarr - should return true
// acecarr can be rearranged to racecar - a palindrome
// given string north, the string should return false
// do this in hash map somehow