// For the purpose of this challenge, Morse code represents every letter as a sequence of 1-4 characters,
//  each of which is either . (dot) or - (dash). The code for the letter a is .-, for b is -..., etc. 
//  The codes for each letter a through z are:

// .- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..
// Normally, you would indicate where one letter ends and the next begins, for instance with a space between 
// the letters' codes, but for this challenge, just smoosh all the coded letters together into a single string 
// consisting of only dashes and dots.

// An obvious problem with this system is that decoding is ambiguous. For instance, both bits and three encode 
// to the same string, so you can't tell which one you would decode to without more information.

export default function smorse(word) {
    var morse = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
    }

    var arrayOfLatters = word.split('')
    var arrayOfMorse = []

    arrayOfLatters.forEach(element => {
        arrayOfMorse.push(morse[element])
    });

    return arrayOfMorse.join('')
}

