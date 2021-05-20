console.log('Lets say hello from here!');

var number = 10;
var string = "Ritesh";
var isFlag = true;


// If you want string variable to get displayed to html pageXOffset. Do below:

document.getElementById('box3').innerHTML = string;

if (number == 10){

    document.getElementById('box4').innerHTML = number+10

}else{

    document.getElementById('box4').innerHTML = number

}

//below is example of list and functions in js.

var list = ['milk','curd','cheese'];

function sampleFunction(){

    for(var i =0; i < list.length; i++){

        console.log(list[i]);

    }
}

sampleFunction();

//below is example how to call event listeners in html file.

document.getElementById('box5').addEventListener('click',function(){

    alert('I got clicked now!')

});