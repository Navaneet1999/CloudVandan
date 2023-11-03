import java.util.Random;

public class assignment1 {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);
        System.out.print("Shuffled Array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();

        System.out.print("Enter a Roman Numeral: ");
        String romanNumeral = System.console().readLine().toUpperCase();
        int intValue = romanToInteger(romanNumeral);
        System.out.println("Integer value: " + intValue);

        System.out.print("Enter a sentence: ");
        String sentence = System.console().readLine().toLowerCase();
        boolean isPangram = isPangram(sentence);
        if (isPangram) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }
    }
    // A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.
    public static void shuffleArray(int[] array) {
        Random rand = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    // B. Enter a Roman Number as input and convert it to an integer. (ex IX = 9)
    public static int romanToInteger(String s) {
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int value = romanValue(s.charAt(i));
            if (value < prevValue) {
                result -= value;
            } else {
                result += value;
            }
            prevValue = value;
        }

        return result;
    }

    public static int romanValue(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    // C. Check if the input is pangram or not.
    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26];
        int totalChars = 0;

        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                if (!alphabet[index]) {
                    alphabet[index] = true;
                    totalChars++;
                }
            }
        }

        return totalChars == 26;
    }
}