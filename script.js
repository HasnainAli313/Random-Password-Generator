// Getting elements
let inputLength= document.getElementById('length');
let generateBtn = document.getElementById('generate');
let passwordGenerated = document.getElementById('password');

// Generate Button event
generateBtn.addEventListener('click',() =>{
    const Length = inputLength.value;
    const password = generatePassword(Length);
    passwordGenerated.textContent = password;

});


// Password Generator Function
function generatePassword(Length) {
    passwordGenerated.style.backgroundColor ="white";
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    if(Length < 8 || Length > 32){
        alert('Please enter length from 8 to 32')
    }
    else{
        for(let i = 0; i < Length; i++){
            let randomIndex = Math.floor(Math.random() * charset.length)
            password += charset[randomIndex];
        }
       
        return password;
    }
}


