const num_buttons = document.getElementsByClassName("num");
const op_buttons = document.getElementsByClassName("op");
const eq_button = document.getElementById("eq");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const result = document.getElementById("res");





var ch="";
var cp=0;

var operator;

var num1="";
var num2="";






for(let i=0;i<op_buttons.length;i++)
{
    op_buttons[i].addEventListener("click",function(){
        ch+=op_buttons[i].innerHTML;
        operator=op_buttons[i].innerHTML;
        update_display();
        console.log(operator);
    })
}








eq_button.addEventListener("click",function(){

    let i=0;
    let x=0;

    while(ch[i] != '/' && ch[i]!= 'x' && ch[i] != '-' && ch[i] != '+')
    {
        i++;
    }

    num1=ch.slice(0,i);
    num2=ch.slice(i+1 , ch.length);

    

    switch(operator)
    {
        case '/':
            x=parseFloat(num1) / parseFloat(num2);
            break;

        case '+':
            x=parseFloat(num1) + parseFloat(num2);
            break;

        case '-':
            x=parseFloat(num1) - parseFloat(num2);
            break;

        case 'x':
            x=parseFloat(num1) * parseFloat(num2);
            break;
    }

    ch=x.toString();

    update_display();
})







del.addEventListener("click",function(){
    if(ch == "")
    {
        return;
    }
    else if(ch.length == 1)
    {
        ch="0";
    }
    else
    {
        ch=ch.slice(0, -1);
    }
    
    update_display();
})






function update_display()
{
    result.innerHTML=ch;
}






clear.addEventListener("click",reset);

function reset()
{
    ch="";
    result.innerHTML="0";
}







for(let i=0;i<num_buttons.length;i++)
{
    num_buttons[i].addEventListener("click",function(){

        if(ch[ch.length-1] =="." && num_buttons[i].innerHTML==".")
        return;

        if(result.innerHTML === '0')
        {
            ch = num_buttons[i].innerHTML;
        }
        else
        {
            ch+=num_buttons[i].innerHTML.toString();
        }
        update_display();
    });
}