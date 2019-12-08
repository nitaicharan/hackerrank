import java.io.*;
import java.util.*;

public class Solution {

  // Complete the makeAnagram function below.
  static int makeAnagram(String a, String b) {
    List auxa = asList(a);
    List auxb = asList(b);
    double auxdiff = 0;

    while( auxa.size() > 0){
      Character c = (Character) auxa.get(0);

      double diff = Collections.frequency(auxa, c) - Collections.frequency(auxb, c);

      if(diff != 0){
        double d = Math.sqrt(diff*diff);
        auxdiff += d;
        auxa.removeAll(Arrays.asList(c));
        auxb.removeAll(Arrays.asList(c));
      }else{
        auxa.removeAll(Arrays.asList(c));
        auxb.removeAll(Arrays.asList(c));
      }
    }

    return (int)Math.round(auxdiff += auxb.size());
  }

  private static List asList(String text){
    List aux = new ArrayList<Character>();

    for(int i=0; i < text.length(); i++){
      aux.add(text.charAt(i));
    }
    return aux;
  }

  private static int countDiffs(){
    return 1;
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


