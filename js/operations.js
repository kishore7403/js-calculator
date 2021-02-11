var no_of_dots=0;
var previous=document.getElementsByClassName("display");
previous[0].innerHTML=parseFloat(previous[0].innerHTML);
var previousvalue=0;
var isadd=0,issub=0,ispro=0,isdiv=0,ismod=0;
var resulton=0;                                   //defining a state wheather the display is displaying answer(1) or user input(0).
var result=0;

function btn_c()
{
    var x=previous;
    previous[0].innerHTML="0";
}


function btn_sqrt(){
    previous[0].innerHTML=Math.sqrt(parseFloat(previous[0].innerHTML)).toFixed(2);
    resulton=1;
}

function btn_add(){
    previousvalue=parseFloat(previous[0].innerHTML);
    previous[0].innerHTML="";                  //making the display box empty
    isadd=1;
}

function btn_sub(){
    
    previousvalue=parseFloat(previous[0].innerHTML);
    previous[0].innerHTML="";                  //making the display box empty
    issub=1;
}

function btn_pro(){
    previousvalue=parseFloat(previous[0].innerHTML);
    previous[0].innerHTML="";                  //making the display box empty
    ispro=1;
}

function btn_div(){
    previousvalue=parseFloat(previous[0].innerHTML);
    previous[0].innerHTML="";                  //making the display box empty
    isdiv=1;
}

function btn_mod(){
    previousvalue=parseFloat(previous[0].innerHTML);
    previous[0].innerHTML="";                  //making the display box empty
    ismod=1;
}

function btn_equal(){
    var newvalue=document.getElementsByClassName("display");
    if (isadd==1)
    {
        newvalue[0].innerHTML=(previousvalue+parseFloat(newvalue[0].innerHTML)).toFixed(2);
    }
    else if(issub==1)
    {   
        newvalue[0].innerHTML=(previousvalue-parseFloat(newvalue[0].innerHTML)).toFixed(2);
    }
    else if(ispro==1)
    {
        newvalue[0].innerHTML=(previousvalue*parseFloat(newvalue[0].innerHTML)).toFixed(2);
        
    }
    else if(isdiv==1)
    {
        newvalue[0].innerHTML=(previousvalue/parseFloat(newvalue[0].innerHTML)).toFixed(2);
    }

    else if(ismod==1)
    {
        newvalue[0].innerHTML=((parseFloat(newvalue[0].innerHTML)/100)*previousvalue).toFixed(2);

    }
    isadd=0;issub=0;ispro=0;isdiv=0;ismod=0;
    resulton=1;
}
    


function btn_zero()
{
    if(previous[0].innerHTML!="0")
    {
        previous[0].innerHTML=previous[0].innerHTML+"0";
    }
}

function btn_one()
{
    if(previous[0].innerHTML=="0" || resulton==1)             
    {
        previous[0].innerHTML="1";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"1";
    }
    resulton=0;
}

function btn_two()
{
    
    if(previous[0].innerHTML=="0" || resulton==1)          
    {
        previous[0].innerHTML="2";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"2";
    }
    resulton=0;
}

function btn_three()
{
    
    if(previous[0].innerHTML=="0" || resulton==1)            
    {
        previous[0].innerHTML="3";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"3";
    }
    resulton=0;
}

function btn_four()
{
    
    if(previous[0].innerHTML=="0" || resulton==1)             
    {
        previous[0].innerHTML="4";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"4";
    }
    resulton=0;
}

function btn_five()
{
    
    if(previous[0].innerHTML=="0" || resulton==1)              
    {
        previous[0].innerHTML="5";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"5";
    }
    resulton=0;
}

function btn_six()
{
 
    if(previous[0].innerHTML=="0" || resulton==1)             
    {
        previous[0].innerHTML="6";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"6";
    }
    resulton=0;
}

function btn_seven()
{
  
    if(previous[0].innerHTML=="0" || resulton==1)             
    {
        previous[0].innerHTML="7";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"7";
    }
    resulton=0;
}

function btn_eight()
{
    
    if(previous[0].innerHTML=="0" || resulton==1)              
    {
        previous[0].innerHTML="8";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"8";
    }
     resulton=0;
}

function btn_nine()
{
    
    if(previous[0].innerHTML=="0" || resulton==1)            
    {
        previous[0].innerHTML="9";   
    }
    else
    {
        previous[0].innerHTML=previous[0].innerHTML+"9";
    }
    resulton=0;
}

function btn_dot()
{
    if(no_of_dots==0)
    {
        previous[0].innerHTML=previous[0].innerHTML+".";
        no_of_dots++;
    } 
}