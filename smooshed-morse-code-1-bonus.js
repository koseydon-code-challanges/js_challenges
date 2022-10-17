// Optional bonus challenges
// For these challenges, use the enable1 word list. It contains 172,823 words. If you encode them all, 
// you would get a total of 2,499,157 dots and 1,565,081 dashes.

import smorse from './smooshed-morse-code-1.js';
const fileUrl = 'enable1.txt' // provide file location

// The sequence -...-....-.--. is the code for four different words (needing, nervate, niding, tiling). 
// Find the only sequence that's the code for 13 different words.

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {
        var arrayOfWords = t.split('\n')
        var arrayOfSmorseWords = []
        arrayOfWords.forEach(element => {
            arrayOfSmorseWords.push(smorse(element))
        })

        var counts = {};
        arrayOfSmorseWords.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        function getKeyByValue(object, value) {
            console.log(Object.keys(object).find(key => object[key] === value));
          }
        getKeyByValue(counts, 13)
    })


// autotomous encodes to .-..--------------..-..., which has 14 dashes in a row. Find the only word 
// that has 15 dashes in a row.

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {
        var arrayOfWords = t.split('\n')
        var arrayOfSmorseWords = []
        arrayOfWords.forEach(element => {
            arrayOfSmorseWords.push(smorse(element))
        })

        arrayOfSmorseWords.forEach(element => {
            if (element.includes('---------------')){
                var indexOfFifteenDashes = arrayOfSmorseWords.indexOf(element)
                console.log(arrayOfWords[indexOfFifteenDashes])
            }
        })
    })

// Call a word perfectly balanced if its code has the same number of dots as dashes. counterdemonstrations 
// is one of two 21-letter words that's perfectly balanced. Find the other one.

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {
        var arrayOfWords = t.split('\n')
        var longWords = []
        
        arrayOfWords.forEach(element => {
            if (element.length === 21){
                longWords.push(element)
            }
        })

        longWords.forEach(element => {
            var morse = smorse(element)

            var dots = morse.replace(/-/g, '').length
            var dashes = morse.replace(/\./g, '').length

            if (dots === dashes && element != 'counterdemonstrations'){
                console.log(element)
            }
        })
    })
    
// protectorate is 12 letters long and encodes to .--..-.----.-.-.----.-..--., which is a palindrome 
// (i.e. the string is the same when reversed). Find the only 13-letter word that encodes to a palindrome.

fetch(fileUrl)
    .then(r => r.text())
    .then(t => {
        var arrayOfWords = t.split('\n')
        var longWords = []
        
        arrayOfWords.forEach(element => {
            if (element.length === 13){
                longWords.push(element)
            }
        })

        function reverseString(str) {
            return str.split("").reverse().join("");
        }

        longWords.forEach(element => {
            var morse = smorse(element)

            if (morse === reverseString(morse)) {
                console.log(element)
            }
        })
    })

// --.---.---.-- is one of five 13-character sequences that does not appear in the encoding of any word. 
// Find the other four.