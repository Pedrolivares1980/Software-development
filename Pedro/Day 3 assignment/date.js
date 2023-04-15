<script>

import java.util.*;
import java.text.*;

public class CodesCracker
{
    'use strict';
   public static void main(String[] args)
   {
      Date d = new Date();
      
      SimpleDateFormat a = new SimpleDateFormat("E");
      SimpleDateFormat b = new SimpleDateFormat("hh:mm a");
      SimpleDateFormat c = new SimpleDateFormat("dd-MM-yyyy");
      
      System.out.println("Today is \"" +a.format(d)+ "\"");
      System.out.println("The Current Time is \"" +b.format(d)+ "\"");
      System.out.println("The Current Date is \"" +c.format(d)+ "\"");
   }
}
</script>