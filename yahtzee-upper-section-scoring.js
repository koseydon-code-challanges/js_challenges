// Description
// The game of Yahtzee is played by rolling five 6-sided dice, and scoring the results in a number of ways. 
// You are given a Yahtzee dice roll, represented as a sorted list of 5 integers, each of which is between 
// 1 and 6 inclusive. Your task is to find the maximum possible score for this roll in the upper section of 
// the Yahtzee score card. Here's what that means.

// For the purpose of this challenge, the upper section of Yahtzee gives you six possible ways to score a 
// roll. 1 times the number of 1's in the roll, 2 times the number of 2's, 3 times the number of 3's, and 
// so on up to 6 times the number of 6's. For instance, consider the roll [2, 3, 5, 5, 6]. If you scored 
// this as 1's, the score would be 0, since there are no 1's in the roll. If you scored it as 2's, the score 
// would be 2, since there's one 2 in the roll. Scoring the roll in each of the six ways gives you the 
// six possible scores:

// 0 2 3 0 10 6
// The maximum here is 10 (2x5), so your result should be 10.

export default function yahtzee_upper(arrayOfNumbers) {
    var scores = [0, 0, 0, 0, 0, 0]

    arrayOfNumbers.forEach(element => {
        switch(element){
            case 1: scores[0] += 1 
            break;
            case 2: scores[1] += 2 
            break;
            case 3: scores[2] += 3 
            break;
            case 4: scores[3] += 4
            break;
            case 5: scores[4] += 5
            break;
            case 6: scores[5] += 6
        }
    });

    return Math.max(...scores)
}