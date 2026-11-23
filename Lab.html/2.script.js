
// Get the appointment form
const form = document.querySelector("form");

// Handle form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get patient details
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;

    // Check form details
    if (name === "" || email === "" ||
        phone === "" || department === "" || date === "") {

        alert("Please fill all required fields.");
    }
    else if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");
    }
    else {

        alert("Appointment booked successfully! Thank you " + name);

        // Clear the form
        form.reset();
    }

});
