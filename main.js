let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let submitBtn = document.querySelector(".submit-btn");
let firstNameError = document.querySelector("#first-name-error");
let lastNameError = document.querySelector("#last-name-error");
let mainForm = document.querySelector(".form");
let email = document.querySelector("#email");
let emailError = document.querySelector("#email-error");
let radioInput = document.querySelectorAll('input[name="query"]');
 
let queryError = document.querySelector("#query-error");
let message = document.querySelector("#message");
let messageError = document.querySelector("#message-error");
let consent = document.querySelector("#consent");
let consentError = document.querySelector("#consent-error");
let messageSend = document.querySelector(".message-send");

 
// Live Validation of first..last Name .. email .. message
  

[firstName, lastName, email, message].forEach((inp) => {
  inp.addEventListener("input", function () {
    const error = document.querySelector(`#${inp.id}-error`);
    if (inp.value.trim()) {
      error.classList.remove("show");
    } else {
      error.classList.add("show");
    }
  });
});

// Live Validation for radio input
radioInput.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      queryError.classList.remove("show");
    }
  });
});
//Live Validation for consent

consent.addEventListener("change", (e) => {
  if (e.target.checked) {
    consentError.classList.remove("show");
  }
});

// Validation condtion of first last ..name  emali
let patrenEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
mainForm.addEventListener("submit", (e) => {
  let isvalid = true;
  if (!firstName.value.trim()) {
    firstNameError.classList.add("show");
    isvalid = false;
  }
  if (!lastName.value.trim()) {
    lastNameError.classList.add("show");
    isvalid = false;
  }
  if (!email.value.trim() || !patrenEmail.test(email.value.trim())) {
    emailError.classList.add("show");
    isvalid = false;
  }

  // Validation condition of radio
  let checkedRadio = false;
  // Loop through all elements
  radioInput.forEach((radio) => {
    if (radio.checked) {
      checkedRadio = true;
    }
  });
  // The decision is out of the loop
  if (!checkedRadio) {
    isvalid = false;
    queryError.classList.add("show");
  }

  // Validation condition of message
  if (!message.value.trim()) {
    isvalid = false;
    messageError.classList.add("show");
  }
  // Validation condition of consent
  let checkconsent = false;
  if (consent.checked) {
    checkconsent = true;
  }
  if (!checkconsent) {
    isvalid = false;
    consentError.classList.add("show");
  }
  if (!isvalid) {
    // control ..If an error is found, the form will stop
    e.preventDefault();
  } else {
      messageSend.classList.remove("nones");
      e.preventDefault();
      mainForm.reset()
    }
       
});
