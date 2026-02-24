
  function login() {
  var loginValue = document.getElementById("loginInput").value;
  var password = document.getElementById("password").value;

  if (loginValue === "" || password === "") {
    alert("Please fill all fields");
    return;
  }
  if (password.length !== 9) {
    alert("Password must be 9 letters");
    return;
  }

  var isEmail = loginValue.includes("@");
  var isUsername = isNaN(loginValue);

  if (isEmail || isUsername) {
    alert("Login successfully");
  } else {
    alert("Invalid email or password");
  }
}
  
    
  