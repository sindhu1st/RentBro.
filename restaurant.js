const Name = document.getElementById("Name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const cpass = document.getElementById("cpass");
const form = document.getElementById("form");

const Name_error = document.getElementById("Name_error");
const email_error = document.getElementById("email_error");
const pass_error = document.getElementById("pass_error");
const cpass_error = document.getElementById("cpass_error");








//form.addEventListener("submit",()=>{


   // if( Name.value === "" || Name.value == null)
    //{
    //    e.preventDefault();
     //   Name_error.innerHTML = "Name is required"

   // }
//})


const log = document.getElementById("log");


log.addEventListener("click",()=>{
   window.location.replace("restro-log.html");
})