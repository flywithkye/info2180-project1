/* Add your JavaScript to this file */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let alertmsg = document.getElementsByClassName('message');
    const subscribebtn = document.querySelector('.newsletter button');
    let useremail;
    
    console.log(alertmsg);
    console.log(subscribebtn);
    

    subscribebtn.addEventListener('click', function(el) {   
        useremail = document.getElementById("email").value;
        console.log(useremail);
        if (useremail.includes("@")){
            alertmsg.textContent = "Thank you! Your email address " + useremail + " has been added to our mailing list!"; 
        }           
        
        else {
            alertmsg.textContent = "Please enter a valid email address."; 
        }      
    });
   
});
