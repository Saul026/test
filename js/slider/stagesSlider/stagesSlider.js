import { getStagesSlideId, setStagesSlideId } from '../../state/stagesState.js';
import { goTo, paginationHandler, nextSlide, prevSlide } from '../index.js';

export function addListeners() {
    let allFrames = document.getElementsByClassName('stages__item');
    let slides = document.getElementsByClassName('stages__carousel');
    let nextButton = document.getElementsByClassName('stages__carousel-next');
    let prevButton = document.getElementsByClassName('stages__carousel-prev');

    let paginationElements = document.getElementsByClassName('stages-pagination__item');
    let activeSlide = document.getElementsByClassName('stages-pagination__item active');

    let percent = 100;

    setStagesSlideId(0);
    goTo(getStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
    activeSlide[0].classList.remove('active');
    paginationElements[0].classList.add('active');

    function next() {
        nextSlide(getStagesSlideId, setStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
        paginationHandler(getStagesSlideId, paginationElements, activeSlide);
    }

    function prev() {
        prevSlide(getStagesSlideId, setStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
        paginationHandler(getStagesSlideId, paginationElements, activeSlide);
    }

    nextButton[0].onclick = next;
    prevButton[0].onclick = prev;

    for (let i = 0; i < paginationElements.length; i++) {
        paginationElements[i].onclick = () => {
            setStagesSlideId(i);
            paginationHandler(getStagesSlideId, paginationElements, activeSlide);
            goTo(getStagesSlideId, slides, allFrames, prevButton, nextButton, percent);
        };
    }
}
