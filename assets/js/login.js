// ========================= Verification Logic ==========================
const button = document.getElementById('login-btn');
const otp_field = document.getElementById('otp-field');
const num_field = document.getElementById('number-field');
const form_heading = document.getElementById('form-heading');
const account_link = document.getElementById('account-link');



button.addEventListener('click', (event) => {
    isContain = otp_field.classList.contains('hidden');
    if (isContain == true) {
        num_field.classList.add('hidden');
        otp_field.classList.remove('hidden');
        form_heading.innerText = "Account Verification";
        account_link.innerText = "Forgot your account?";
        button.innerText = "Verify";
        console.log('Print');
    }
    if (isContain == false) {
            window.location.href = './dashboard.html'
    }


    event.preventDefault();
});


const pinInputs = document.querySelectorAll('.otp-input');
pinInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, "");

        if (input.value && index < pinInputs.length - 1) {
            pinInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            pinInputs[index - 1].focus();
        }
    });

});








