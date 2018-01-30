/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function show_next(id,nextid,bar)
{
  var ele=document.getElementById(id).getElementsByTagName("input");
  var error=0;
  for(var i=0;i<ele.length;i++)
  {
    if(ele[i].type=="text" && ele[i].value=="")
  {
    error++;
  }
  }
	
  if(error==0)
  {
    document.getElementById("account_details").style.display="none";
    document.getElementById("user_details").style.display="none";
    document.getElementById("qualification").style.display="none";
    $("#"+nextid).fadeIn();
    document.getElementById(bar).style.backgroundColor="#6495ED";
  }
  else
  {
    alert("Fill All The details");
  }
}

function show_prev(previd,bar)
{
  document.getElementById("account_details").style.display="none";
  document.getElementById("window.location.href='next.html'.user_details").style.display="none";
  document.getElementById("qualification").style.display="none";
  $("#"+previd).fadeIn();
  document.getElementById(bar).style.backgroundColor="#D8D8D8";
}
