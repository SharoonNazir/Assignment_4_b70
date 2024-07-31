// --------------ODD VALUES WITHOUT USING ARRAY----------



function checkOdd(){
console.log("data entered");
let val1=document.querySelector(".inp");
let valInt=val1.value;
let value1=parseInt(valInt,10);


let val2=document.querySelector(".inp2");
let valInt2=val2.value;
let value2=parseInt(valInt2,10);
console.log(value1);
console.log(value2);

if(value1>value2){const opt1=document.querySelector(".output");
    const prg=document.createElement("h1");
    prg.innerHTML="Value 1 should be less than value 2 ";
    opt1.appendChild(prg);}
    else{



for(let i=value1;i<=value2;i++){
   if(value1%2==1){     
const opt1=document.querySelector(".output");
const prg=document.createElement("h1");
prg.innerHTML="Odd Value: "+value1;
opt1.appendChild(prg);
   } 
   value1+=1;
}
    }

}