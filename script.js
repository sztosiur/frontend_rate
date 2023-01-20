
const myForm = document.querySelector("#rates");
const radioGroup = myForm.querySelectorAll(".form__radio");
const stateClass = document.querySelectorAll("section");
const submitBtn = myForm.querySelector("#submit");



function checkRate(){
   for(const radio of radioGroup){
        radio.addEventListener("change", e => {
            for(const radio of radioGroup){
                if (radio.checked){
                    stateClass.forEach(n => n.classList.toggle("inactive"));
                }
         }
    })
   }
}

submitBtn.addEventListener("click", checkRate);




