const sliderItems = document.querySelectorAll('.slider__item');
const sliderItemsArray = [...sliderItems];

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

const dotItems = document.querySelectorAll('.slider__dot');
const dotItemsArray = [...dotItems];
const dotsArrayLength = sliderItemsArray.length;

if (dotsArrayLength <= sliderItemsArray.length) {
    dotItemsArray[
        sliderItemsArray.findIndex(item => item.classList.contains( 'slider__item_active'))
        ].classList.add('slider__dot_active');
};


function changeSideParameters(slideNumber, slideItem, dotItem) {

    slideItem.classList.remove('slider__item_active');
    dotItem.classList.remove('slider__dot_active');
    sliderItemsArray[slideNumber].classList.add('slider__item_active');
    dotItemsArray[slideNumber].classList.add('slider__dot_active');
        
};


function cicleSwitchSlide(event) {
    
    elem = event.target;

    let activeNumber = sliderItemsArray.findIndex(item => item.classList.contains( 'slider__item_active'));
    if (activeNumber === -1) {
        activeNumber = 0;
        console.log ('активный слайд не найден. Его номер установлен по умолчанию = 0.');
    } else console.log('номер активного слайда = ' + activeNumber);

    let activeSlide = sliderItemsArray[activeNumber];
    let activeDot = dotItemsArray[activeNumber];

    if (elem.classList.contains('slider__arrow_prev')) {
        
        if (activeNumber === 0) currentNumber = sliderItemsArray.length - 1
        else currentNumber = activeNumber - 1;

        changeSideParameters(currentNumber, activeSlide, activeDot);
    };

    if (elem.classList.contains('slider__arrow_next')) {
        
        if (activeNumber === sliderItemsArray.length - 1) currentNumber = 0
        else currentNumber = activeNumber + 1;

        changeSideParameters(currentNumber, activeSlide, activeDot);
    };

};


document.addEventListener('click', cicleSwitchSlide)


for (let m =0; m < dotItemsArray.length; m++) {

    dotItemsArray[m].onclick = function (){

        let activeNumber = sliderItemsArray.findIndex(item => item.classList.contains( 'slider__item_active'));

       if ((dotItemsArray[m]) && (m <= (dotsArrayLength - 1))) {        
        changeSideParameters(m, sliderItemsArray[activeNumber], dotItemsArray[activeNumber]);
       };
    };
 };