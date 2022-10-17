// Given two strings of letters, determine whether the second can be made from the
// first by removing one letter. The remaining letters must stay in the same order.

export default function funnel(word1, word2) {

    for (var i = 0; i < word1.split('').length; i++) {
        var arrayOfLatters = word1.split('');
        arrayOfLatters.splice(i, 1);
        if (arrayOfLatters.join('') === word2) {
            return true
        }
    }
    return false
}