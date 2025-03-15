const allInputs = document.querySelectorAll('input');
const styleBorderOnActive = document.querySelectorAll('#border');
const styleBackgroundOnActive = document.querySelectorAll('#background');

let isChecked = false

allInputs.forEach((input, index) => {
    input.addEventListener('blur', () => {
        styleBorderOnActive[index].classList.remove('active');
        if(styleBackgroundOnActive[index]) {
            styleBackgroundOnActive[index].classList.remove('active');
        }
        if(input.type.includes('radio')){
            input = isChecked;
        }
    })
    input.addEventListener('focus', (e) => {
        isChecked = true
        if(styleBackgroundOnActive[index]){
            styleBackgroundOnActive[index].classList.add('active');
        }
        styleBorderOnActive[index].classList.add('active');
        if(input.type.includes('radio')){
            input = isChecked;
        }
    })
})