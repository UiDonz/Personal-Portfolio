function showPopupForm() {
  document.getElementById("popup-form-container").hidden = false;
  document.getElementById("contact-form-name").focus();
}

function hidePopupForm() {
  document.getElementById("popup-form-container").hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-form-container");

  document.getElementById('show-popup').addEventListener('click', () => {
    showPopupForm();
  });

  document.getElementById('close-popup').addEventListener('click', () => {
    hidePopupForm();
  });

  // Close when clicking the dark backdrop (but not the form itself)
  popup.addEventListener('click', (event) => {
    if (event.target === popup) hidePopupForm();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hidePopupForm()
  });

  document.getElementById("contact-form").addEventListener("submit", (event) => {
    // Send with EmailJS instead of navigating to another page
    event.preventDefault();
    const contactForm = event.target
    clearMessages(contactForm);

    if (!validateContactForm(contactForm)) {
      displayError(contactForm, 'Please fill in all required fields with a valid email and a 10-digit phone number.')
      return;
    }

    sendContactForm(contactForm);
  });
});

// Function to validate email addresses
function isValidEmail(email) {
  // Define the JS Regex pattern for a valid email address
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  // Test the email against the pattern and return the result (true or false)
  return emailRegex.test(email);
}

// Function to validate phone numbers
function isValidPhoneNumber(phone) {
  // Define the JS Regex pattern for a valid 10-digit phone number
  const phoneRegex = /^\d{10}$/;
  
  // Test the phone number against the pattern and return the result (true or false)
  return phoneRegex.test(phone);
}

// Function to validate the contact form
function validateContactForm(contactForm) {
  // Get the values entered in the form fields
  // trim() so fields containing only spaces count as empty
  const name = contactForm["name"].value.trim();
  const email = contactForm["email"].value.trim();
  const phone = contactForm["phone"].value.trim();
  const title = contactForm["title"].value.trim();
  const message = contactForm["message"].value.trim();

  // Check if the required fields (name, email, title, and message) are empty
  // If any of them are empty, return false to prevent form submission
  if (!name || !email || !title || !message) {
    return false;
  }

  // Check if the email is valid using the isValidEmail function
  // If the phone field is not empty, also check if it is valid using the isValidPhoneNumber function
  // If either the email or the phone number is invalid, return false to prevent form submission
  if (!isValidEmail(email) || (phone && !isValidPhoneNumber(phone))) {
    return false;
  }

  // If all the validations pass, return true to allow form submission
  return true;
}

// Function to display an error message on the web page
function displayError(formElement, message) {
  const errorElement = formElement.getElementsByClassName("form-error")[0];
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

// Function to display a success message on the web page
function displaySuccess(formElement, message) {
  const successElement = formElement.getElementsByClassName("form-success")[0];
  successElement.textContent = message;
  successElement.style.display = "block";
}

// Function to hide any previous error/success messages
function clearMessages(formElement) {
  formElement.getElementsByClassName("form-error")[0].style.display = "none";
  formElement.getElementsByClassName("form-success")[0].style.display = "none";
}

// Sending emails via EmailJS
const EMAILJS_PUBLIC_KEY = "iudgk4KJXjJ2AEIEG";
const EMAILJS_SERVICE_ID = "service_b1vl51p";
const EMAILJS_TEMPLATE_ID = "template_lq7vk5r";

function sendContactForm(contactForm) {
  if (typeof emailjs === "undefined") {
    displayError(contactForm, "The email service couldn't load. Please email me directly instead.");
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // sendForm sends each field by its name attribute: name, email, phone, title, message
  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm, { publicKey: EMAILJS_PUBLIC_KEY })
    .then(() => {
      contactForm.reset();
      displaySuccess(contactForm, "Thanks! Your message has been sent.");
    })
    .catch((error) => {
      console.error("EmailJS failed:", error);
      displayError(contactForm, "Sorry, your message couldn't be sent. Please try again or email me directly.");
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    });
}
