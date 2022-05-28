const signUpButton = document.querySelector(".sign-up-button")
const nameInput = document.getElementById("name")
const mailInput = document.getElementById("mail")
const speciesInput = document.getElementById("species")
const planetInput = document.getElementById("planet")
const password = document.getElementById("password")
const passwordRepeat = document.getElementById("password-repeat")

function check() {
    if (password.value == passwordRepeat.value) {
        passwordRepeat.style.outlineColor = 'green';
    } else {
        passwordRepeat.style.outlineColor = 'red';
    }
  }


signUpButton.addEventListener("click", (e) => {
    if (nameInput.value === "" || mailInput.value === "" || speciesInput.value === "" || 
        planetInput.value === "" || password.value === "" || passwordRepeat.value === "") {
        return
    }
    if (password.value && password.value === passwordRepeat.value) {
        alert(`Welcome to the academy ${nameInput.value}, you will make a fine addition to our army. Yours Vader.`)
    } else {
        e.preventDefault()
        alert("Please try again")
    }
})
