var visible_div='g';//get the div which is showing

function show_me(z){
      if(visible_div=='g')
         document.getElementById("grid_div").style.visibility="hidden";
      else
         visible_div.style.visibility="hidden";
      switch(z){
         case 'h' :document.getElementById("help_div").style.visibility="visible"; visible_div=document.getElementById("help_div"); break;
         case 'g' :document.getElementById("grid_div").style.visibility="visible"; visible_div=document.getElementById("grid_div"); break;
      }
}