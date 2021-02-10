var no_of_dots=0;
var previousvalue=document.getElementsByClassName("display");
var isadd=0,issub=0,ispro=0,isdiv=0;
var resulton=0;
function btn_c()
{
    var x=previousvalue;
    previousvalue[0].innerHTML="0";
}


function btn_sqrt(){
    previousvalue[0].innerHTML=Math.sqrt(parseFloat(previousvalue[0].innerHTML))
    resulton=1;
}

function btn_zero()
{
    if(previousvalue[0].innerHTML!="0")
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"0";
    }
}

function btn_add()
{
    var x=previousvalue;
   // previousvalue[0]=
}

function btn_one()
{
    if(previousvalue[0].innerHTML=="0" || resulton==1)             
    {
        previousvalue[0].innerHTML="1";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"1";
    }
    resulton=0;
}

function btn_two()
{
    
    if(previousvalue[0].innerHTML=="0" || resulton==1)          
    {
        previousvalue[0].innerHTML="2";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"2";
    }
    resulton=0;
}

function btn_three()
{
    
    if(previousvalue[0].innerHTML=="0" || resulton==1)            
    {
        previousvalue[0].innerHTML="3";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"3";
    }
    resulton=0;
}

function btn_four()
{
    
    if(previousvalue[0].innerHTML=="0" || resulton==1)             
    {
        previousvalue[0].innerHTML="4";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"4";
    }
    resulton=0;
}

function btn_five()
{
    
    if(previousvalue[0].innerHTML=="0" || resulton==1)              
    {
        previousvalue[0].innerHTML="5";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"5";
    }
    resulton=0;
}

function btn_six()
{
 
    if(previousvalue[0].innerHTML=="0" || resulton==1)             
    {
        previousvalue[0].innerHTML="6";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"6";
    }
    resulton=0;
}

function btn_seven()
{
  
    if(previousvalue[0].innerHTML=="0" || resulton==1)             
    {
        previousvalue[0].innerHTML="7";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"7";
    }
    resulton=0;
}

function btn_eight()
{
    
    if(previousvalue[0].innerHTML=="0" || resulton==1)              
    {
        previousvalue[0].innerHTML="8";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"8";
    }
     resulton=0;
}

function btn_nine()
{
    
    if(previousvalue[0].innerHTML=="0" || resulton==1)            
    {
        previousvalue[0].innerHTML="9";   
    }
    else
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+"9";
    }
    resulton=0;
}

function btn_dot()
{
    if(no_of_dots==0)
    {
        previousvalue[0].innerHTML=previousvalue[0].innerHTML+".";
        no_of_dots++;
    } 
}