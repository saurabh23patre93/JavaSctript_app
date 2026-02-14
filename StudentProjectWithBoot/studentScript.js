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