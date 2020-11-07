//define variables for each button
const clear = document.querySelector("#clear");
const divide = document.querySelector("#divide p");
const seven = document.querySelector("#seven p");
const eight = document.querySelector("#eight p");
const nine = document.querySelector("#nine p");
const times = document.querySelector("#times p");
const four = document.querySelector("#four p");
const five = document.querySelector("#five p");
const six = document.querySelector("#six p");
const minus = document.querySelector("#minus p");
const one = document.querySelector("#one p");
const two = document.querySelector("#two p");
const three = document.querySelector("#three p");
const plus = document.querySelector("#plus p");
const zero = document.querySelector("#zero p");
const point = document.querySelector("#point p");
const equals = document.querySelector("#equals p");
let calculation = document.querySelector("#display p");
//ar1 will fill as buttons are clicked
let ar1 = [];
//uno-diez will be the 10 empty fields filled with calculations
let uno = document.querySelector("#uno p")
let dos = document.querySelector("#dos p")
let tres = document.querySelector("#tres p")
let cuatro = document.querySelector("#cuatro p")
let cinco = document.querySelector("#cinco p")
let seis = document.querySelector("#seis p")
let siete = document.querySelector("#siete p")
let ocho = document.querySelector("#ocho p")
let nueve = document.querySelector("#nueve p")
let diez = document.querySelector("#diez p")
let ar3=[];

//when clicked, each button will call its respective function
clear.addEventListener("click", klar);
divide.addEventListener("click", durch);
seven.addEventListener("click", sieben);
eight.addEventListener("click", acht);
nine.addEventListener("click", neun);
times.addEventListener("click", zeit);
four.addEventListener("click", vier);
five.addEventListener("click", funf);
six.addEventListener("click", sechs);
minus.addEventListener("click", weniger);
one.addEventListener("click", eins);
two.addEventListener("click", zwei);
three.addEventListener("click", drei);
plus.addEventListener("click", zusammen);
zero.addEventListener("click", kein);
point.addEventListener("click", punkt);
equals.addEventListener("click", gleich);

//functions tied to eventListener will add their respective values to the end of ar1 or clear ar1
//klar and gleich will clear the running calculation bar at the top
function klar() {
  //while loop clears ar1 to start a new calculation
  while (ar1.length > 0) {
  ar1.pop();
  }
  console.log(ar1);
  //with ar1.join(""), all values in ar1 will be joined together without spaces or commas between them
  calculation.textContent = ar1.join("")
}

function durch() {
  ar1.push(" / ");
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function sieben() {
  ar1.push(7);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function acht() {
  ar1.push(8);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function neun() {
  ar1.push(9);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function zeit() {
  ar1.push(" * ");
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function vier() {
  ar1.push(4);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function funf() {
  ar1.push(5);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function sechs() {
  ar1.push(6);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function weniger() {
  ar1.push(" - ");
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function eins() {
  ar1.push(1);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function zwei() {
  ar1.push(2);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function drei() {
  ar1.push(3);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function zusammen() {
  ar1.push(" + ");
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function kein() {
  ar1.push(0);
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

function punkt() {
  ar1.push(".");
  console.log(ar1);
  calculation.textContent = ar1.join("")
}

//gleich() will determine what the sequence equals and return an output
function gleich() {
  //x is the answer of the equation being typed
  x = eval(ar1.join(""))
  //ar2 will take the arithmetic expression, add an "=" at the end, and finally add the output
  let ar2 = [ar1.join(""), " = ", x]
  //ar3 will consist of each ar2 output
  //every time the "=" button on the calculator is clicked, a value will be added
  ar3.push(ar2.join(""))
  //console.log is just a way to verify that everything is working correctly when things are clicked
  console.log(eval(ar3));
  //calling fillIt() here will update tthe results within areas uno-diez
  fillIt()
  //while loop to clear ar1
  while (ar1.length > 0) {
    ar1.pop();
    }
    //adding calculation.textContent will update the display at the top much like any other button would
    calculation.textContent = ar1.join("")
    //setCookie is meant to update the user's cookie to save the status of their session
    //ideally, this would allow the application to retrieve the user's past results
    //however, I wasn't sure how to do this. I'm sure I could learn it very quickly, but I have no experience working with cookies
  setCookie()
}

//fillIt() will evaluate ar3 to determine what the last 10 values are
//The last 10 values will be added from newest to oldest from top to bottom
function fillIt() {
  uno.textContent = ar3[ar3.length-1];
  dos.textContent = ar3[ar3.length-2];
  tres.textContent = ar3[ar3.length-3];
  cuatro.textContent = ar3[ar3.length-4];
  cinco.textContent = ar3[ar3.length-5];
  seis.textContent = ar3[ar3.length-6];
  siete.textContent = ar3[ar3.length-7];
  ocho.textContent = ar3[ar3.length-8];
  nueve.textContent = ar3[ar3.length-9];
  diez.textContent = ar3[ar3.length-10];
  
}

//this function is supposed to update the user's cookie to be retrieved at a later time
//I would then need to add a function to read the cookie and separate its values into ar3
    //this function would be called when the application is loaded
function setCookie () {
  let y = ar3.join("|");
  document.cookie = "Tim" + encodeURIComponent(ar3.join("|"))
}



  