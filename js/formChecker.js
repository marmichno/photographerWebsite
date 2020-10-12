let formButton = document.querySelector('.form button');

formButton.addEventListener('click', formValidator);

function formValidator(){

    let canYouSendEmail = true;
    let formInputs = document.querySelectorAll('.input');

    formInputs.forEach(item =>{
        item.classList.remove('inputError');
        item.classList.remove('inputSuccesful');
    })

    formInputs.forEach(item => {
        if(item.value === ""){
            item.placeholder = 'This input is required';
            item.classList.add('inputError');
            canYouSendEmail = false;
        }
    })

    if(formInputs[0].value.length > 40){
        formInputs[0].value = "";
        formInputs[0].placeholder = "Name too long";
        formInputs[0].classList.add('inputError');
        canYouSendEmail = false;
    }

    function validateEmail(mail) {

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
            return (true);
        }else{
            return (false);
        }
    }
    
    if(validateEmail(formInputs[1].value) == false){
        formInputs[1].value = "";
        formInputs[1].placeholder = "Please enter a valid e-mail";
        formInputs[1].classList.add('inputError');
        canYouSendEmail = false;
    }

    if(canYouSendEmail){
        console.log('true');
        formInputs[2].value = "";
        formInputs[2].placeholder = "E-mail has been sent succesfuly.";
        formInputs[2].classList.add('inputSuccesful');
    }else{
        return;
    }
}