let users = []

function login(){
  let email = document.getElementById("username").value
  let password = document.getElementById("password").value
  let users = JSON.parse(localStorage.getItem('users'))

  for( let i =0; i < users.length; i++){
    
    if(email == users[i].email && password == users[i].password){
      
          alert(`Welcome back ${users[i].email}`)
          return window.location.replace("../HTML/index.html")

    }
  }
  return alert("Please make sure you registered")
}

function register(){
    let email = document.getElementById("username").value
    let password = document.getElementById("password").value
    let confirmation = document.getElementById("Retype-password").value
    if(confirmation == password){

      let user = { 
        email,
        password
     }
     users.push(user)
     localStorage.setItem("users",JSON.stringify(users))
     localStorage.setItem("users",JSON.stringify(users))

    
     alert("Welcome to On-da go listing!")

     return window.location.replace("../HTML/index.html")

 } else {
     return alert("confirmation failed")
 }


}

