let img1= document.getElementById("img1");
let img1Top = getComputedStyle(img1).top;
let imgIntValue=parseInt(img1Top);

let img2= document.getElementById("img2");
let img2right = getComputedStyle(img2).right;
var img2IntValue=parseInt(img2right);


let img3= document.getElementById("img3");
let img3left = getComputedStyle(img3).right;
let img3IntValue=parseInt(img3left);

let int ;

function Move()
{
    int = setInterval(function(){
        imgIntValue-=50;
        img2IntValue-=50;
        img3IntValue+=50;
    
    
        if(imgIntValue<0)
        {
            imgIntValue = screen.height;
        }
        if(img2IntValue<0)
        {
            img2IntValue = screen.width;
        }
        if(img3IntValue> screen.width)
        {
            img3IntValue = 0;
        }
        img1.style.top=imgIntValue+"px";
        img2.style.right=img2IntValue+"px";
        img3.style.right=img3IntValue+"px";
    },100)
    
}

function Clear()
{
    clearInterval(int);
}