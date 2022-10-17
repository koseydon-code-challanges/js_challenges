// Given a string, find all words from the enable1 word list that can be made by removing one 
// letter from the string. If there are two possible letters you can remove to make the same word, 
// only count it once. Ordering of the output words doesn't matter.


export default function bonus(word) {

    const fileUrl = 'enable1.txt' // provide file location

    fetch(fileUrl)
        .then(r => r.text())
        .then(t => {
            var arrayOfWords = t.split('\n')
            var arrayOfRemovedWords = []
            for (var i = 0; i < word.split('').length; i++) {

                arrayOfLatters = word.split('');
                arrayOfLatters.splice(i, 1);
                removedWord = arrayOfLatters.join('');
                arrayOfWords.forEach(element => {

                    if (element === removedWord && !arrayOfRemovedWords.includes(element)) {
                        arrayOfRemovedWords.push(element)
                    }
                })
            }
            return arrayOfRemovedWords
        })
}