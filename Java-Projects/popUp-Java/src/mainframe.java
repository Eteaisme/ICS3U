import javax.swing.JFrame;
import javax.swing.WindowConstants;

public class mainframe extends JFrame{
    public void init() {
        setTitle("I'm a popup!");
        setSize(600,300);
        setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        setVisible(true);
    };
     
}