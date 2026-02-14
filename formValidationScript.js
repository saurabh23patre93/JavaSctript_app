function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(name === "") {
        alert("Name must be filled out");
        return false;
    }
    if(email === "") {
        alert("Email must be filled out");
        return false;
    }
    if(password.length <6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    alert("Form submitted successfully!");
    return true;   

}