const func1 = ()=> {
    const name = document.getElementById("name").value;
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    localStorage.setItem("name1",name)
    localStorage.setItem("name2",first)
    localStorage.setItem("name",last)
    localStorage.setItem("email1",email)
    localStorage.setItem("pass1",pass)
    
    window.location.href = "login.html";
}



const func = ()=> {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
  
    const email1 = localStorage.getItem("email1");
    const pass1 = localStorage.getItem("pass1");
  
    if (email == email1 && pass == pass1) {
      console.log("hahahahaha")
      window.location.href = "logout.html";
  
    } else {
      alert("email or password incorrect")
    }

  // console.log("hello")
    
  }
