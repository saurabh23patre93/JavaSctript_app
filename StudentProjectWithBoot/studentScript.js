document.getElementById("studentForm").
addEventListener("submit", function(event) {
    event.preventDefault();
    let studentData = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        education: document.getElementById("education").value,
        address: document.getElementById("address").value
    };

    fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
    })
    .then(response => response.json())
    .then(data => { 
        alert("Student data submitted successfully!");
        console.log(data);
    })
    .catch(error => {
        alert("Error submitting student data.");
        console.error("Error:", error);
    });
});

function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let middleName = document.getElementById("middleName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let education = document.getElementById("education").value;
    let address = document.getElementById("address").value;
    if(firstName === "") {
        alert("Name must be filled out");
        return false;
    }
    if(middleName === "") {
        alert("Middle Name must be filled out");
        return false;
    }
    if(lastName === "") {
        alert("Last Name must be filled out");
        return false;
    }
    if(dob === "") {
        alert("Date of Birth must be filled out");
        return false;
    }
    if(education === "") {
        alert("Education must be filled out");
        return false;
    }   
    if(address === "") {
        alert("Address must be filled out");
        return false;
    }
    alert("Form submitted successfully!");
    return true;   

}