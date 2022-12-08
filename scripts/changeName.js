function changeName(){
    let nameInput = document.getElementById("nameInput");
    nameInput.disabled = false;
    nameInput.contentEditable = true;
    nameInput.style.border = "1px black solid";
    nameInput.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            nameInput.innerText = nameInput.textContent;
            nameInput.disabled = true;
            nameInput.contentEditable = false;
            nameInput.style.border = "none";
        }
    });
}

function changeEmail(){
    let emailInput = document.getElementById("emailInput");
    emailInput.disabled = false;
    emailInput.contentEditable = true;
    emailInput.style.border = "1px black solid";
    emailInput.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            emailInput.innerText = emailInput.textContent;
            emailInput.disabled = true;
            emailInput.contentEditable = false;
            emailInput.style.border = "none";
        }
    });
}
