function one() {
    input.value += "1";
}
function two() {
    input.value += "2";
}
function three() {
    input.value += "3";
}
function four() {
    input.value += "4";
}
function five() {
    input.value += "5";
}
function six() {
    input.value += "6";
}
function seven() {
    input.value += "7";
}
function eight() {
    input.value += "8";
}
function nine() {
    input.value += "9";
}
function zero() {
    input.value += "0";
}
function add() {
    input.value += "+";
}
function sub() {
    input.value += "-";
}
function cross() {
    input.value += "*";
}
function div() {
    input.value += "/";
}
function percent() {
    input.value += "%";
}
function dot() {
    input.value += ".";
}
function empty() {
    input.value = "";
}
function bracket() {
    input.value += "()"
}
function clean() {
    input.value[5] += "9";
}
function equal() {
    input.value = eval(input.value);
}
// function bracket() {
//     var a = input.value.length;
//     var i;
//     for(i=a-1; i>=0; i--)
//     {
//         if(input.value[i]=="(") {
//             input.value += ")";
//             break;
//         }
//     }
//     for(i=a-1; i>=0; i--)
//     {
//         if(input.value[i]==")" || input.value[i]!=")") {
//             input.value += "(";
//             break;
//         }
//     } 
// }
 const input = document.querySelector('#calculator');