
var psw = document.getElementById("psw").value;  
var psw_repeat = document.getElementById("psw-repeat").value;  
var email = document.getElementById("email").value;  


document.getElementById('click-to-register').addEventListener('click',function validateForm(){

alert('I got clicked now!')


//check empty first name field  
if(email == "") {  
    document.getElementById("email").innerHTML = "**Enter Your Email ID";  
    alert('Enter Email')
    return false;  
}  

//check empty password field  
else if(psw == "") {  
    document.getElementById("psw").innerHTML = "**Fill the password please!"; 
    alert('Enter Password') 
    
    return false;  
}  

//check empty confirm password field  
else if(psw_repeat == "") {  
    document.getElementById("psw-repeat").innerHTML = "**Enter the password please!";  
    alert('Confirm your password')
    return false;  
}   

//minimum password length validation  
else if(pw1.length < 8) {  
    document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
    alert('Password length must be atleast 8 characters')
    return false;  
}  

//maximum length of password validation  
else if(pw1.length > 15) {  
    document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
    alert('Password length must not exceed 15 characters')
    return false;  
}  

else if(pw1 != pw2) {  
    document.getElementById("message2").innerHTML = "**Passwords are not same";  
    alert('Passwords are not same')
    return false;  
} else {  
    alert ("Your password created successfully");  
    document.write("JavaScript form has been submitted successfully");  
}  

});


// function validateForm() {  
//     //collect form data in JavaScript variables  
//     var pw1 = document.getElementById("psw").value;  
//     var pw2 = document.getElementById("psw-repeat").value;  
//     var email = document.getElementById("email").value;  

//     //check empty first name field  
//     if(email == "") {  
//       document.getElementById("email").innerHTML = "**Enter Your Email ID";  
//       return false;  
//     }  

//     //check empty password field  
//     if(pw1 == "") {  
//       document.getElementById("psw").innerHTML = "**Fill the password please!";  
//       return false;  
//     }  
    
//     //check empty confirm password field  
//     if(pw2 == "") {  
//       document.getElementById("psw-repeat").innerHTML = "**Enter the password please!";  
//       return false;  
//     }   
     
//     //minimum password length validation  
//     if(pw1.length < 8) {  
//       document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
//       return false;  
//     }  
  
//     //maximum length of password validation  
//     if(pw1.length > 15) {  
//       document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
//       return false;  
//     }  
    
//     if(pw1 != pw2) {  
//       document.getElementById("message2").innerHTML = "**Passwords are not same";  
//       return false;  
//     } else {  
//       alert ("Your password created successfully");  
//       document.write("JavaScript form has been submitted successfully");  
//     }  
//  }  

//  validateForm();