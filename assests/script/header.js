// Đóng mở menu option
var menuBtn = document.querySelector('.header-menu');
var optionBlock = document.querySelector('.header-option');
var closeOption = document.querySelector('.header-option-close');

// Mở option
menuBtn.onclick = function () {
    optionBlock.style.transform = 'translateX(0%)';
}

// Đóng option
closeOption.onclick = function () {
    optionBlock.style.transform = 'translateX(100%)';
}