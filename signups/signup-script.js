
// variables
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitButton= document.querySelector(".submitButton");
 // create inputed value as a text;
 emailInput.innerText= emailInput.value;
 passwordInput.innerText=passwordInput.value;          
 // so the typed text can show as the true value


// event listeners
submitButton.addEventListener("click", submit);


// functions

// function to submit
function submit(e) {
    e.preventDefault(); // prevents page refreshing and form submitting

    if (emailInput.value === "") return;
    if (passwordInput.value === "") return;
    // prevents an empty input from adding

    // add to local storage
    saveuseremailInput(emailInput.value);
    saveuserpwordInput(passwordInput.value);
}

// function to save input to the local storage
function saveuseremailInput(emailInput) {
    let newInput;
    if (localStorage.getItem("newInput") === null) {
        newInput = [];
    } else {
        newInput = JSON.parse(localStorage.getItem("newInput"));
    }

    newInput.push(newInput);
    localStorage.setItem("newInput", JSON.stringify (newInput));
    // this saves the new input to the local storage as an array using stringify
}
