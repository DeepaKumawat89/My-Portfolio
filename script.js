// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  // Validate contact form
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");
  
    if (name === "" || email === "" || message === "") {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
      return false;
    }
  
    status.textContent = "Message sent successfully! (Form not actually submitted)";
    status.style.color = "green";
  
    // Reset form fields
    document.getElementById("contactForm").reset();
  
    return false; // Prevent default form submission
  }
  