import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Solution {

  // Complete the makeAnagram function below.
  static int makeAnagram(String a, String b) {
    char[] charsa = a.toCharArray();
    char[] charsb = b.toCharArray();
    int[] auxa = toIntArray(charsa);
    int[] auxb = toIntArray(charsb);

    int count = 0;

    for (int i=0; i < auxa.length; i++) {
      count += Math.abs(auxa[i]-auxb[i]);
    }

    return count;
  }

  private static  int[] toIntArray(char[] aux){
    int[] array = new int['z'-'a'+1];

    for (char i : aux) {
      array[i-'a']++;
    }

    return array;
  }

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) throws IOException {
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    String a = scanner.nextLine();

    String b = scanner.nextLine();

    int res = makeAnagram(a, b);

    bufferedWriter.write(String.valueOf(res));
    bufferedWriter.newLine();

    bufferedWriter.close();
  
    scanner.close();
  }
}
