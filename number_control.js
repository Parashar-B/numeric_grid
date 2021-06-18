var visible_div='g';//get the div which is showing

function show_me(z){
      if(visible_div=='g')
         document.getElementById("grid_div").style.visibility="hidden";
      else
         visible_div.style.visibility="hidden";
      switch(z){
         case 'h' :document.getElementById("help_div").style.visibility="visible"; visible_div=document.getElementById("help_div"); break;
         case 'g' :document.getElementById("grid_div").style.visibility="visible"; visible_div=document.getElementById("grid_div"); break;
         case 'm' :document.getElementById("math_div").style.visibility="visible"; visible_div=document.getElementById("math_div"); break;
      }
}
function clear_all(){
   document.getElementById("prime_check_input").value="";
   disable_all_prime();
}

function check_btn_control(){
   if(document.getElementById("prime_check_input").value=="")
      disable_all_prime();
   else
      enable_check_prime_btn();

}

function disable_all_prime(){
   document.getElementById("sl1").style.backgroundColor="white";
   document.getElementById("prime_check_btn").disabled=true;
   document.getElementById("prime_check_btn").style.backgroundColor="gray";
   document.getElementById("sl2").style.backgroundColor="white";
   document.getElementById("prime_result").style.backgroundColor="black";
   document.getElementById("prime_result").innerHTML="";
   document.getElementById("clear_btn").style.visibility="hidden";
}

function enable_check_prime_btn(){
   document.getElementById("sl1").style.backgroundColor="orange";
   document.getElementById("prime_check_btn").disabled=false;
   document.getElementById("prime_check_btn").style.backgroundColor="orange";
   document.getElementById("clear_btn").style.visibility="visible";
}

function prime_check_result(){
   document.getElementById("sl2").style.backgroundColor="orange";
   document.getElementById("prime_result").style.backgroundColor="green";
   var x=document.getElementById("prime_check_input").value;
   var f=0;
   for(var i=2;i<=x;i++)
   {
      if(x%i==0)
         f++;
   }
   if(f==1)
      document.getElementById("prime_result").innerHTML="PRIME";
   else
   document.getElementById("prime_result").innerHTML="NOT PRIME";
}

