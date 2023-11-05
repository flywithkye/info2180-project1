/* Add your JavaScript to this file */
"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let alertmsg  = document.querySelector('div .message');
    const subscribebtn = document.querySelector('.newsletter button');
    let useremail;
    
    console.log(alertmsg);
    console.log(subscribebtn);
    
    subscribebtn.addEventListener('click', function(el) {  
        el.preventDefault();
        useremail = document.getElementById("email").value;
        console.log(useremail);
        if (useremail.includes("@") && useremail.includes(".")){
            alertmsg.innerHTML = "<strong> Thank you! Your email address " + useremail + 
                                " has been added to our mailing list! </strong>"; 
        }           
        
        else {
            alertmsg.innerHTML = "<strong>Please enter a valid email address.</strong>"; 
        }      
    });
   
});






/*

"use strict";
function check() {   
    let alertmsg = document.getElementsByClassName('message');
    const useremail = document.getElementById("email").value;

    console.log(alertmsg);
    console.log(useremail);

    if (useremail.includes("@")){
        alertmsg.innerHTML = "Thank you! Your email address " + useremail + " has been added to our mailing list!"; 
    }           
    
    else {
        alertmsg.innerHTML = "Please enter a valid email address."; 
    }      
}

document.addEventListener('DOMContentLoaded', () => {
    const subscribebtn = document.querySelector('.newsletter button');

    console.log(subscribebtn);
    
    subscribebtn.addEventListener('click', function (e) {   
        e.preventDefault();
        check();
    });
   
});

*/
