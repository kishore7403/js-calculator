var no_of_dots=0;

function btn_c()
{
    var x=document.getElementsByClassName("display");
    x[0].innerHTML="0";
}
function btn_sqrt(){
    var x=document.getElementsByClassName("display");
    x[0].innerHTML=Math.sqrt(parseFloat(x[0].innerHTML))
}
function btn_zero()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"0";
    }
}
function btn_one()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"1";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="1";
    }
}

function btn_two()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
          
          x[0].innerHTML=x[0].innerHTML+"2";
        
    }
    else
    {
        x[0].innerHTML="2";

    }
}

function btn_three()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"3";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="3";
    }
}

function btn_four()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"4";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="4";
    }
}

function btn_five()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"5";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="5";
    }
}

function btn_six()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"6";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="6";
    }
}

function btn_seven()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"7";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="7";
    }
}

function btn_eight()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"8";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="8";
    }
}

function btn_nine()
{
    var x=document.getElementsByClassName("display");
    if(x[0].innerHTML!=0)
    {
        x[0].innerHTML=x[0].innerHTML+"9";
    }
    else if(x[0].innerHTML==0)
    {
        x[0].innerHTML="9";
    }
}

function btn_dot()
{ 
    var x=document.getElementsByClassName("display");
    if(no_of_dots==0){
        x[0].innerHTML=x[0].innerHTML+".";
        no_of_dots++;
    }
    
    
}

