
const myForm = document.querySelector("#rates");
const radioGroup = myForm.querySelectorAll('input[name="rating"]');
const stateClass = document.querySelectorAll("section");
const submitBtn = myForm.querySelector("#submit");
const rateCount = document.querySelector(".rate__count");
const label = myForm.querySelectorAll("label");
let checkedLabel;

radioGroup.forEach(n => addEventListener("click", ()=>{
    
    for(const radio of radioGroup){
        if(radio.checked){
            checkedLabel = radio.parentElement;
            
        }
    }
    checkedLabel.classList.toggle("label__active");

}));



submitBtn.addEventListener("click", ()=>{
  let radioChecked;
  for(const radio of radioGroup){
        if(radio.checked){
            radioChecked = radio.value;
        }
    }
    
     if(radioChecked){
        for(const state of stateClass){
            state.classList.toggle("inactive");
        }
        rateCount.innerHTML=`<b>${radioChecked}</b>`;
    }
    else{alert("You haven't choose any rate.")};
   
});




