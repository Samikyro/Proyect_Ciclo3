'use strict'

const switcher = document.querySelector('.mainButton');
const switcher = document.querySelector('.mainButton1');
const switcher = document.querySelector('.mainButton2');
const switcher = document.querySelector('.mainButton3');
const switcher = document.querySelector('.mainButton4');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

});