  function sal(){
       var num1 = document.getElementById("a").value;
       var num2 = document.getElementById("b").value;
       
       var check = (num2 / 100) * num1;
       var result = num1 - check;
       document.getElementById("res").innerHTML = "Money paid For Tax : "+check.toFixed()+"<br> Net Salary: "+result.toFixed();

}
                      
