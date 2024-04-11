
public class JavaVariables {
   public static void main(String[] args) {
    
      int games = 3;
      double allowance = 40.5;
      long battlepass;

      battlepass = 15;
      

      //Print out our var values along with a string that explains our values
      System.out.println("Number of games I own = " + games);
      System.out.println("My monthly allowance = " + allowance);
      System.out.println("Cost of a single battle pass = " + battlepass);




      //With our current Allowance, how many battle passes will be a be able to buy?
      System.out.println("With our current allowance we would be able to buy " + Math.floor(allowance/battlepass) + " battlepasses.");

      // What is the total cost of battle passes if we wanted to have each one? 
      System.out.println("If we wanted to buy every battle pass we would need $"+ (games *  battlepass));
   } 
}