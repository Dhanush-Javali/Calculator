const ac = document.querySelector(".ac");
const disp = document.querySelector(".disp");


function DispAdding(data){
    let val = disp.innerText;
    let len = val.length;
    if(len <= 11)
    {
        false;
        disp.innerText += data;  
    }
}

ac.addEventListener('click', function(e){
         disp.innerText ="";
},false)


const nine = document.querySelector(".btn9");

nine.addEventListener('click',function(e){
         DispAdding(9);
},false)

const eight = document.querySelector(".btn8");

eight.addEventListener('click',function(e){
        DispAdding(8);
},false)

const seven = document.querySelector(".btn7");

seven.addEventListener('click',function(e){
        DispAdding(7);
},false)

const six = document.querySelector(".btn6");

six.addEventListener('click',function(e){
    let val = disp.innerText;
    let len = val.length;
        DispAdding(6);
},false)

const five = document.querySelector(".btn5");

five.addEventListener('click',function(e){
         DispAdding(5);
},false)

const four = document.querySelector(".btn4");

four.addEventListener('click',function(e){
         DispAdding(4);
},false)

const three = document.querySelector(".btn3");

three.addEventListener('click',function(e){
          DispAdding(3);
},false)

const two = document.querySelector(".btn2");

two.addEventListener('click',function(e){
          DispAdding(2);
},false)

const one = document.querySelector(".btn1");

one.addEventListener('click',function(e){
            DispAdding(1);
         
},false)

const zero = document.querySelector(".btn0");

zero.addEventListener('click',function(e){
            DispAdding(0);
},false)

const dot = document.querySelector(".btndot");

dot.addEventListener('click',function(e){
        DispAdding(".");
},false)

const pluse = document.querySelector(".btnpluse");

pluse.addEventListener('click',function(e){
         DispAdding("+");
},false)

const minus = document.querySelector(".btnminus");

minus.addEventListener('click',function(e){
         DispAdding("-");
},false)

const div = document.querySelector(".btndiv");

div.addEventListener('click',function(e){
          DispAdding("/");
},false)

const mul = document.querySelector(".btnmul");

mul.addEventListener('click',function(e){
         DispAdding("*");       
},false)

const equale = document.querySelector(".btnequale");

equale.addEventListener('click',function(e){
    let res = disp.innerText;
    disp.innerText = eval(res);
},false)




