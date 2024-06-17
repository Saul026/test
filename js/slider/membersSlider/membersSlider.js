import { getStagesSlideId, setStagesSlideId } from '../../state/stagesState.js';
import { goTo, nextSlide, prevSlide } from '../index.js';

function addListeners() {
    let allFrames = document.getElementsByClassName('members-slider__item');
    let slides = document.getElementsByClassName('members-slider__wrapper');
    let nextButton = document.getElementsByClassName('members__carousel-next');
    let prevButton = document.getElementsByClassName('members__carousel-prev');

    let percent;

    let slideNumber = document.getElementById('members-pagination__slide-number');

    function stagesInterval() {
        if (window.innerWidth > 900) {
            percent = 33.3;
        } else if (window.innerWidth > 500 && window.innerWidth < 900) {
            percent = 50;
        } else {
            percent = 100;
        }
        let slideId = getStagesSlideId();

        if (slideId === allFrames.length - 1) {
            setStagesSlideId(0);
        } else {
            setStagesSlideId(slideId + 1);
        }

        goTo(getStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
        slideNumber.innerHTML = getStagesSlideId() + 1;
    }

    function stopInterval() {
        clearInterval(intervalId);
        intervalId = null;
    }

    function startInterval() {
        intervalId = setInterval(stagesInterval, intervalTime);
    }

    const intervalTime = 4000;
    let intervalId = setInterval(stagesInterval, intervalTime);

    function next() {
        if (window.innerWidth > 900) {
            percent = 33.3;
        } else if (window.innerWidth > 500 && window.innerWidth < 900) {
            percent = 50;
        } else {
            percent = 100;
        }
        nextSlide(getStagesSlideId, setStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
        slideNumber.innerHTML = getStagesSlideId() + 1;
        stopInterval();
        startInterval();
    }

    function prev() {
        if (window.innerWidth > 900) {
            percent = 33.3;
        } else if (window.innerWidth > 500 && window.innerWidth < 900) {
            percent = 50;
        } else {
            percent = 100;
        }
        prevSlide(getStagesSlideId, setStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
        slideNumber.innerHTML = getStagesSlideId() + 1;
        stopInterval();
        startInterval();
    }

    nextButton[0].onclick = next;
    prevButton[0].onclick = prev;
}
addListeners();
