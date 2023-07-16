function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  confirmationMessage.style.display = "none"
    reserve.style.display = "block"
    reserve.reset();
}

// Issue #1
// Select the close element

  let modalClose = document.querySelector(".close");

  // Listen for the click and change background's display
  
  modalClose.addEventListener("click", () => {
    modalbg.style.display = "none"
  })


//Issue #2

let regexName = /^[a-zA-Z]{2,}$/;
let inputFirstName = document.getElementById("first");
let errorMessageFirst = document.getElementById("errorFirst");

inputFirstName.addEventListener('input', firstName);

function firstName() {
  let valueFirstName = inputFirstName.value;


  if (regexName.test(valueFirstName)) {
    console.log("OK first name");
    inputFirstName.style.border = "none"
    errorMessageFirst.style.display = "none";

    return true;
  } else {
    console.log("Erreur name");
    inputFirstName.style.border = "3px solid red"
    errorMessageFirst.style.display = "block";
    return false;
  }
}


  let inputLastName = document.getElementById("last");
  let errorMessageLast = document.getElementById("errorLast");

  inputLastName.addEventListener('input', lastName);


function lastName() {
  
  let valueLastName = inputLastName.value

  if (regexName.test(valueLastName)) {
    errorMessageLast.style.display = "none";
    inputLastName.style.border = "none"

    console.log("OK last name");
    return true;
  } else {
    errorMessageLast.style.display = "block";
    inputLastName.style.border = "3px solid red"

    console.log("Erreur last name");
    return false;
  }
}

let inputEmail = document.getElementById("email");
let errorMessageEmail = document.getElementById("errorEmail");

inputEmail.addEventListener('input', emailTest);

function emailTest() {
  let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  let valueEmail = inputEmail.value
  if (regexEmail.test(valueEmail)) {
    inputEmail.style.border = "none";
    errorMessageEmail.style.display = "none"
    console.log("OK email");
    return true;
  } else {
    console.log("Erreur email");
    errorMessageEmail.style.display = "block";
    inputEmail.style.border = "3px solid red";
    return false;
  }
}

let inputBirthdate = document.getElementById("birthdate");
    let errorMessageBirthdate = document.getElementById("errorBirthdate");
    let regexBirthdate = /^\d{4}-\d{2}-\d{2}$/;

    inputBirthdate.addEventListener('input', birthdateValidation);

    function birthdateValidation() {
      let valueBirthdate = inputBirthdate.value;

      if (regexBirthdate.test(valueBirthdate)) {
        inputBirthdate.style.border = "none";
        errorMessageBirthdate.style.display = "none";
        console.log("OK birthdate");
        return true;
      } else {
        console.log("Erreur birthdate");
        errorMessageBirthdate.style.display = "block";
        inputBirthdate.style.border = "3px solid red";
        return false;
      }
    }


let inputQuantity = document.getElementById("quantity");
inputQuantity.addEventListener('input', quantityTest);
let errorMessageQuantity = document.getElementById("errorQuantity");

function quantityTest() {
  let regexQuantity = /^\d+$/;

  let valueQuantity = inputQuantity.value;

  
  if(regexQuantity.test(valueQuantity) && (valueQuantity >= 1 && valueQuantity <= 99)) {
    inputQuantity.style.border = "none";
    console.log("Ok quantity")
    errorMessageQuantity.style.display = "none";
    return true;
  } else {
    console.log('error quantity');
    errorMessageQuantity.style.display = "block";
    inputQuantity.style.border = "3px solid red";

    return false;
  }
}

let checkbox = document.querySelector("#checkbox1");
checkbox.addEventListener("change", conditionAccepted);

let errorMessageRead = document.getElementById("errorRead");

function conditionAccepted() {
  let valueCheckbox = checkbox.checked;

  if(valueCheckbox === true) {
    errorMessageRead.style.display = "none";
    console.log("OK check")
    return true;
  } else {
    errorMessageRead.style.display = "block";

    console.log("erreur j'ai lu")
    return false;
  }
}

let errorMessageLocation = document.getElementById("errorLocation");

function radioOk() {
  let radioButtons = document.querySelectorAll('input[name="location"]');
  
  for (let i = 0; i < radioButtons.length; i++) {
    
    if (radioButtons[i].checked) {
      errorMessageLocation.style.display = "none";

      return true;
    }
  }
  console.log("prob radio");
  errorMessageLocation.style.display = "block";

      return false;
}




const confirmationMessage = document.querySelector(".merci");


// Verify if each input is correct, change the modal to merci

function validate(event){
  if (firstName() && lastName() && emailTest() && quantityTest() && conditionAccepted() && radioOk()) {
    console.log("OK form");
    event.preventDefault();
    confirmationMessage.style.display = "block"
    reserve.style.display = "none"
    return true;
  } else {
    console.log("Erreur form");
    return false;
  }
}

// Close modal with button fermer

function buttonClose() {
  modalbg.style.display = "none";
}