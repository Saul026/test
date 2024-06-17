import './membersSlider/membersSlider.js';

function move(slides, slideId, percent) {
    slides[0].style.transform = `translateX(-${percent * slideId}%)`;
}

export function goTo(getSlideId, slides, allFrames, prevButton, nextButton, percent) {
    let slideId = getSlideId();

    if (slideId === 0) {
        prevButton[0].classList.add('disabled-arrow');
        nextButton[0].classList.remove('disabled-arrow');
    } else if (slideId < 0) {
        slideId = allFrames.length - 1;
    } else {
        slideId = slideId;
        if (slideId === allFrames.length - 1) {
            nextButton[0].classList.add('disabled-arrow');
        } else {
            prevButton[0].classList.remove('disabled-arrow');
            nextButton[0].classList.remove('disabled-arrow');
        }
    }

    move(slides, slideId, percent);
}

export function paginationHandler(getSlideId, paginationElements, activeSlide) {
    let slideId = getSlideId();

    activeSlide[0].classList.remove('active');
    paginationElements[slideId].classList.add('active');
}

export function nextSlide(getSlideId, setSlideId, slides, allFrames, prevButton, nextButton, percent) {
    let slideId = getSlideId();

    if (slideId === allFrames.length - 1) return;

    setSlideId(slideId + 1);
    goTo(getSlideId, slides, allFrames, prevButton, nextButton, percent);
}

export function prevSlide(getSlideId, setSlideId, slides, allFrames, prevButton, nextButton, percent) {
    let slideId = getSlideId();

    if (slideId === 0) return;

    setSlideId(slideId - 1);
    goTo(getSlideId, slides, allFrames, prevButton, nextButton, percent);
}
