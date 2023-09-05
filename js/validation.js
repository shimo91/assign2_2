var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var phone=document.getElementById("phone");
var email=document.getElementById("email");
var pwd=document.getElementById("pwd");
var err=document.getElementById("err");
var err1=document.getElementById("err1");
var err2=document.getElementById("err2");
var err3=document.getElementById("err3");
var err4=document.getElementById("err4");
var err5=document.getElementById("err5");
var errs=document.getElementById("errs");
var myModal = document.getElementById('successModal');

// var myTimeout= setTimeout(successReg, 5000);
// clearTimeout(myTimeout);

function requiredAll()
{
    if(fname.value.trim()=="" || lname.value.trim()=="" || phone.value.trim()=="" || email.value.trim()=="" || pwd.value.trim()==""){
        err.innerText="Please fill out all fields";
        err.style.color="red";
        return false;
    }
    else
    {
        var emailv=validEmail();
        var phv=validPhone();
        var psv=validPass();
        if(emailv==true && phv==true && psv==true)
        {
            //console.log("required all else if");
            errs.innerText="Registered successfully";
            fname.value="";
            lname.value="";
            email.value="";
            phone.value="";
            pwd.value="";
            //alert("Registered successfully");
            errs.style.color="green";
            errs.style.opacity="1";
            // setTimeout(() => {
            //     errs.innerText="";
            // }, 5000)
            
            // function successReg() {
            //     errs.innerText="";
            // }
            setTimeout(function(){fadeOut();}, 2000);

           
            // myModal = new bootstrap.Modal(document.getElementById('successModal'));
            // myModal.toggle();
            return true;
        }
        else
        {
            err.innerText="";
            err.style.color="red";
            return false;
        }
               
    }
   
}

// myModal.addEventListener('hidden.bs.modal', function (event) {
//     window.location.href = "index.html";
//   })


function fadeOut(element) {
    //var el = document.getElementById(element);
    console.log(errs.innerText);
    setInterval(function() {
       var opacity = errs.style.opacity;
       if (opacity > 0) {
          opacity -= 0.1;
          errs.style.opacity = opacity;
       }
    }, 500);
 }

function validEmail()
{
   // console.log("btn clicked");
    // regular expression

    //var regexp =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/
    var regexp =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        // err4.innerText="Email is valid";
        // err4.style.color="green";
        err.innerText="";
        err4.innerText="";
        return true;
    }
    else
    {
        err4.innerText="Email is invalid";
        err.innerText="";
        err4.style.color="red";
        return false;
    }

}   

function validPhone()
{
    var regexp =/^[0-9]{3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/
    if(regexp.test(phone.value))
    {
        // err3.innerText="phone number is valid";
        // err3.style.color="green";
        err3.innerText="";
        err.innerText="";
        return true;
    }
    else
    {
        err3.innerText="Phone number is invalid";
        err.innerText="";
        err3.style.color="red";
        return false;
    }

}
function validPass()
{
    var regexp=/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/;
    if(regexp.test(pwd.value))
    {
        // err3.innerText="phone number is valid";
        // err3.style.color="green";
        err5.innerText="";
        err.innerText="";
        return true;
    }
    else
    {
        err5.innerText="Password is invalid";
        err.innerText="";
        err5.style.color="red";
        return false;
    }

}


function requiredloginAll()
{
    console.log("login");
    if(email.value.trim()=="" || pwd.value.trim()==""){
        err.innerText="Please fill out all fields";
        err.style.color="red";
        return false;
    }
    else
    {
        var emailv=validEmail();
        var psv=validPass();
        if(emailv==true && psv==true)
        {
            email.value="";
            pwd.value="";
            //alert("Login successfully");
            err.innerText="";
            errs.innerText="Login successfully";
           
            errs.style.color="green";
            errs.style.opacity="1";
            
            setTimeout(function(){fadeOut();}, 2000);
            return true;
        }
    }
    
}
