// A. Take a sentence as an input and reverse every word in that sentence.
function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }

    let reversedSentence = reversedWords.join(" ");
    return reversedSentence;
}

function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence:", reversedSentence);

// B. Perform sorting of an array in descending order.
function bubbleSortDescending(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const arrayToSort = [5, 1, 4, 2, 8];
bubbleSortDescending(arrayToSort);
console.log("Sorted Array (Descending):", arrayToSort);