const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "home.html"
    } else {
        alert("access denied")
    }
})

function authentication(username, password){


    if(username==="admin" && password==="password123"){
        return true
    }   else if(username==="sindhu" && password==="rentbro"){
            return true
        } 
    else{
        false
    }

}