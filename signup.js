function hello()
{
    if(   document.getElementsByClassName("right")[0].style.display!="none")
    {document.getElementsByClassName("right")[0].style.display="none";
    document.getElementsByClassName("login")[0].style.display="block";}
    else  {  document.getElementsByClassName("login")[0].style.display="none";
    document.getElementsByClassName("right")[0].style.display="block"}

}
function verif()
{
    document.getElementById("V_alpha").style.display="none"
  var name=document.getElementById("name").value;
  if(name.length==0)
  {
    //alert("verifier le nom")
    document.getElementById("V_nom").style.display="block"

  }
  else {
    document.getElementById("V_nom").style.display="none" 
   name=name.toUpperCase();
    for(i=0;i<name.length;i++)
    {
        if(name[i]<'A' || name[i]>'Z')
         {
            //alert("verifier alphabetique")
            document.getElementById("V_alpha").style.display="block"
         }
    }


  }
}

