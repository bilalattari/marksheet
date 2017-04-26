
var eng = +prompt('Enter your numbers in english?');
document.getElementById('English').innerHTML = eng;

var math = +prompt('Enter your numbers in maths?');
document.getElementById('Maths').innerHTML = math;

var sci = +prompt('Enter your numbers in science?');
document.getElementById('Science').innerHTML = sci;

var urdu = +prompt('Enter your numbers in urdu?');
document.getElementById('Urdu').innerHTML = urdu;

var sindhi =+prompt('Enter your numbers in sindhi?');
document.getElementById('Sindhi').innerHTML = sindhi;

var eco = +prompt('Enter your numbers in economics?');
document.getElementById('Eco').innerHTML = eco;

var total = eng + math + sci + urdu + sindhi + eco
console.log(total)
document.getElementById('Total').innerHTML = total;

var perc = total/700 *100;
var percen = perc.toFixed(2)
document.getElementById('perc').innerHTML = percen;
if(percen > 100){
document.getElementById('grade').innerHTML = ('Write the original numbers you got');
}
else if (percen > 80){
document.getElementById('grade').innerHTML = ('A+');
}else if(percen > 70){
document.getElementById('grade').innerHTML = ('A');
}else if(percen > 60){
document.getElementById('grade').innerHTML = ('B');
}else if(percen > 50){
document.getElementById('grade').innerHTML = ('C');
}else if(percen > 40){
document.getElementById('grade').innerHTML = ('D');
}else if(percen > 33){
document.getElementById('grade').innerHTML = ('E');
} else{
    document.getElementById('grade').innerHTML = ('you are failed');
}