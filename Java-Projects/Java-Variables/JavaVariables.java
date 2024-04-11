
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




      /*With our current Allowance, how many battle passes will be a be able to buy?
      
          Divide our allowance by the cost of a battle pass and round down as we can only buy whole battlepasses 
      
      */
      
      System.out.println("With our current allowance we would be able to buy " + Math.floor(allowance/battlepass) + " battlepasses.");  

      /* What is the total cost of battle passes if we wanted to have each one? 
      
            Multiply the cost of a battle pass by the number of games we own to get he total cost
      
      */
      System.out.println("If we wanted to buy every battle pass we would need $"+ (games *  battlepass));
   } 
}