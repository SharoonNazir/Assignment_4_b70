// // let arr=['sharoon','nazir','mubeen'];
// // let arr2=['Haroon','Raheel','Ahad'];
// // let arr3=arr.concat(arr2);
// // arr.unshift('sameer');
// // console.log(arr);


    
// // function calculateage(){
// //     const a=document.querySelector('#n1')
// //     let result=2024-a.value;
// //     alert(result);  
// // }

// // const age1=[3,4,5,6,10,5,55,32,45,12];


// // const lessthan=age1.filter((pkr)=>{
// //     if(pkr<10){return pkr;}})

// // const lessthan_2=age1.map((element)=>{
// //             if(element<10){return element;}})
    

// // console.dir(document);
   

// //console.log(lessthan);
// //console.log(lessthan_2);

// //-----------DOM-----------# is for id , . is for class

// //console.log(document.body);



// // const resdiv=document.querySelector("#n2")
// // const h1Tag=document.createElement("h1");
// // h1Tag.innerText="Your age is"+result;

// // let ele1=document.querySelector("h1");
// // console.log(ele1);

// // let ele2=document.querySelectorAll(".eles");
// // console.log(ele2);

// // const x=document.querySelector("h3");

// // console.log(x.innerText);


// // const y=document.querySelector("p");
// // y.innerText="This is the new added thing";

// // const z=document.getElementById("rr");
// // z.innerText="yeh wali cheez or dali hai";

// const studentNames = ["Zeeshan", "Ali", "Asad"];

// studentNames.push("Nazir");
// studentNames.push("Wasif");
// studentNames.push("Nouman");
// studentNames.push("Non");

// const nexskillStudentNames = ["Zafar", "Nouman"];

// const finalStudents = studentNames.concat(nexskillStudentNames);

// studentNames.unshift("Wasif2");
// studentNames.shift();
// console.log(studentNames);

// const trimmedArray = studentNames.slice(1, 5);
// console.log("This :"+trimmedArray);
// console.log(studentNames);
// studentNames.splice(1, 3);
// console.log("yeh wala result: "+studentNames);

// const myFilterFunc = () => {
//   console.log("Anonymouse func");
// };

// myFilterFunc();

// studentNames.map((element) => {
//   console.log(element);
// });

// nexskillStudentNames.map((element) => {
//   console.log(element);
// });

// const filteredArray = studentNames.filter((element) => {
//   if (element.startsWith("N")) {
//     return element;
//   }
// });

// console.log(filteredArray);

// const age = [10, 20, 15, 6, 7, 28];

// // const eligibleAges = age.filter((element) => {
// //   if (element >= 18) {
// //     return element;
// //   }
// // });

// const eligibleAges1 = age.filter((element) => {
//   if (element >= 18) {
//     return element;
//   }
// });
// const eligibleAges2 = age.map((element) => {
//   if (element >= 18) {
//     return element;
//   }
// });

// console.log("filter k sath: "+eligibleAges1);
// console.log("map k sath result: "+eligibleAges2);

// const age1 = [3, 4, 5, 6, 10, 5, 55, 32, 45, 12];


//-------------------------------------------------------------
// // DOM
// // document.body.innerText += "Ali";

// function printMyName() {
//   const myNameInputField = document.querySelector("#name");
//   console.log(myNameInputField.value);
// }
//-------------------------------------------------------------------
// function calculateAge() {
//   // Number Input Field
//   let myAgeField = document.querySelector("#age");
//   //   Number Input Field Value Get
//   const userBY = myAgeField.value;
//   //   2024 - userEnteredBirthYear
//   const userAge = 2024 - userBY;
//   //   Alert User Age
// //   alert("Your age is " + userAge);
//   // DOM to HTML Div
//-------------------------------------------------------------------------
//   //   H4 to Result DIv
//   const resultDiv = document.querySelector(".result");
//   const h1Tag = document.createElement("h4");
//   h1Tag.innerText = "Your age is " + userAge;
//   h1Tag.className = "resultH1";

//   resultDiv.appendChild(h1Tag);

//   //   Result Div Direct Add
//   //   const resultDiv = document.querySelector(".result");
//   //   console.log(resultDiv.innerHTML);
//   //   resultDiv.innerHTML = "Your age is " + userAge;

//   //   Prompt
// //   const userBY2 = prompt("Enter your age");
// //   //   2024 - userEnteredBirthYear
// //   const userAge2 = 2024 - userBY2;
// //   //   Alert User Age
// //   alert("Your age is " + userAge2);
// }





function total(){

    let s1=document.querySelector(".num1");
    let number1=s1.value;
   let num1=parseInt(number1,10);
    
    let s2=document.querySelector(".num2");
    let number2=0;
     number2=s2.value;
let num2=parseInt(number2,10);

let s3=document.querySelector(".num3");
let number3=s3.value;
let num3=parseInt(number3,10);

let s4=document.querySelector(".num4");
let  number4=s4.value;
let num4=parseInt(number4,10);

let s5=document.querySelector(".num5");
let  number5=s5.value;
let num5=parseInt(number5,10);

let s6=document.querySelector(".num6");
let  number6=s6.value;
let num6=parseInt(number6,10);

let s7=document.querySelector(".num7");
let  number7=s7.value;
let num7=parseInt(number7,10);

let s8=document.querySelector(".num8");
let number8=s8.value;
let num8=parseInt(number8,10);

let s9=document.querySelector(".num9");
let number9=s9.value;
let num9=parseInt(number9,10);

let s10=document.querySelector(".num10");
let number10=s10.value;
let num10=parseInt(number10,10);

    const result1=num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;

    console.log("The result is: "+result1);



const show=document.querySelector(".result");
const h1Tag=document.createElement("h1");
h1Tag.innerHTML="The sum is: "+result1;
h1Tag.className="resultH1";
show.appendChild(h1Tag);}
