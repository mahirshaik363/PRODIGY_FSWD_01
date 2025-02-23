function validateform() {
    const name = document.getElementById("name").value;
    if (!/^[a-zA-Z]{6,}$/.test(name)) {
        alert("Name should contain alphabets and the length should not be less than 6 letters");
        return false;
    }

    const age = document.getElementById("age").value;
    if (age === "" || isNaN(age) || age <= 18) {
        alert("Age should be a numeric value greater than 18 and should not be empty");
        return false;
    }

    const mobile = document.getElementById("mobile").value;
    if (!/^\d{10}$/.test(mobile)) { // Changed .text to .test
        alert("Phone number should contain 10 digits");
        return false;
    }

    const email = document.getElementById("email").value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) { // Changed .text to .test and fixed regex
        alert("The format of the email should be: name@gmail.com");
        return false; // Added return false to stop form submission
    }

    return true; // Return true if all validations pass
}
