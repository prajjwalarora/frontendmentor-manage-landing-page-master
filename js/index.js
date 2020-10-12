const formElement = document.querySelector('form');
const inputElement = document.querySelector('.footer__content--opt-in-input');
const errorMessage = document.querySelector('.email__error');
const testemonialScroll = document.querySelector(".testemonial-scroll");
const testemonialContainer = document.querySelector(".testemonial-container");
const slideIndicater = document.querySelectorAll(".slide__indicater");

const validateEmailSring = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

formElement.addEventListener('submit', e => {
    e.preventDefault();

    const email = inputElement.value;
    if (!email.match(validateEmailSring)) {
        errorMessage.style.display = "block";
    }
    else {
        errorMessage.style.display = "none";
    }

})

testemonialContainer.addEventListener('scroll', e => {
    const cordX = testemonialScroll.getBoundingClientRect().x * -1;
    slideIndicater.forEach(sI => {
        sI.classList.remove('slide__indicater--active')
    });
    if (cordX >= 0 && cordX < 383) {
        slideIndicater[0].classList.add('slide__indicater--active');
    } else if (cordX >= 383 && cordX < 776) {
        slideIndicater[1].classList.add('slide__indicater--active');
    } else if (cordX >= 776 && cordX < 1158) {
        slideIndicater[2].classList.add('slide__indicater--active');
    } else if (cordX >= 1158) {
        slideIndicater[3].classList.add('slide__indicater--active');
    }
})


