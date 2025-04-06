// Signup form visibility
function showSignup() {
    document.getElementById("signup-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
}

// Sign Up
function signUp() {
    var un = document.getElementById("signup-username").value;
    var pw = document.getElementById("signup-password").value;

    if (un == "" || pw == "") {
        alert("Please enter a valid username and password.");
        return;
    }

    // Save form information
    localStorage.setItem("un", un);
    localStorage.setItem("pw", pw);

    alert("Sign-up successful! Please log in.");
    showLogin();
}

// Login form visibility
function showLogin() {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
}

// Login
function login() {
    var un = document.getElementById("login-username").value;
    var pw = document.getElementById("login-password").value;

    var storedUn = localStorage.getItem("un");
    var storedPw = localStorage.getItem("pw");

    if (un == storedUn && pw == storedPw) {
        alert("Login successful!");
        document.getElementById("login-box").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
        document.getElementById("user-name").innerText = un;
    } else {
        alert("Invalid username or password.");
    }
}

// Logout
function logout() {
    document.getElementById("dashboard").style.display = "none";
    showLogin();
}