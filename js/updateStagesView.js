import { addListeners } from './slider/stagesSlider/stagesSlider.js';

let stagesView;

export function updateStagesView() {
    if (window.innerWidth > 900) {
        if (stagesView === 'desktop') return;
        stagesView = 'desktop';

        const stagesData = [
            {
                number: '1',
                text: 'Строительство железнодорожной магистрали Москва-Васюки',
            },
            {
                number: '2',
                text: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
            },
            {
                number: '3',
                text: 'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
            },
            {
                number: '4',
                text: 'Строительство дворца для турнира',
            },
            {
                number: '5',
                text: 'Размещение гаражей для гостевого автотранспорта',
            },
            {
                number: '6',
                text: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
            },
            {
                number: '7',
                text: 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
            },
        ];
        const stagesContainer = document.querySelector('.stages__items');
        stagesContainer.innerHTML = '';

        stagesData.forEach((stage) => {
            const stageItem = document.createElement('div');
            stageItem.classList.add('stages__item');
            stageItem.id = `stages__item-${stage.number}`;

            const stageNumber = document.createElement('div');
            stageNumber.classList.add('stages__number');
            stageNumber.textContent = stage.number;

            const stageText = document.createElement('p');
            stageText.classList.add('stages__text');
            stageText.textContent = stage.text;

            stageItem.appendChild(stageNumber);
            stageItem.appendChild(stageText);
            stagesContainer.appendChild(stageItem);
        });
    } else {
        if (stagesView === 'mobile') return;
        stagesView = 'mobile';

        const stagesCard = [
            {
                stages: [
                    {
                        id: 1,
                        value: 'Строительство железнодорожной магистрали Москва-Васюки',
                    },
                    {
                        id: 2,
                        value: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
                    },
                ],
            },
            {
                stages: [
                    {
                        id: 3,
                        value: 'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
                    },
                ],
            },
            {
                stages: [
                    {
                        id: 4,
                        value: 'Строительство дворца для турнира',
                    },
                    {
                        id: 5,
                        value: 'Размещение гаражей для гостевого автотранспорта',
                    },
                ],
            },
            {
                stages: [
                    {
                        id: 6,
                        value: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
                    },
                ],
            },
            {
                stages: [
                    {
                        id: 7,
                        value: 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
                    },
                ],
            },
        ];

        const stages = document.querySelector('.stages__items');
        stages.innerHTML = '';

        const stagesCarousel = document.createElement('DIV');
        stagesCarousel.classList.add('stages__carousel');

        const stagesPagination = document.querySelector('.stages__pagination');
        stagesPagination.innerHTML = '';
        for (let i = 0; i < stagesCard.length; i++) {
            const stagesCarouselItem = document.createElement('DIV');
            stagesCarouselItem.classList.add('stages__item');

            const stagesPaginationElement = document.createElement('DIV');
            stagesPaginationElement.classList.add('stages-pagination__item');

            // stagesPaginationElement.addEventListener('click', () => {
            //     setSlideId(i)
            //     goTo();
            // });

            for (let j = 0; j < stagesCard[i].stages.length; j++) {
                const stage = document.createElement('DIV');
                stage.classList.add('stages-item__stage');
                const stageNumber = document.createElement('DIV');
                const stagetext = document.createElement('P');

                stageNumber.className = 'stages__number';
                stagetext.className = 'stages__text';

                stageNumber.innerHTML = stagesCard[i].stages[j].id;
                stagetext.innerHTML = stagesCard[i].stages[j].value;

                stage.appendChild(stageNumber);
                stage.appendChild(stagetext);
                stagesCarouselItem.appendChild(stage);
            }
            stagesPagination.appendChild(stagesPaginationElement);
            stagesCarousel.appendChild(stagesCarouselItem);
        }

        const paginationItem = document.getElementsByClassName('stages-pagination__item');
        paginationItem[0].classList.add('active');

        stages.appendChild(stagesCarousel);
        addListeners()
    }
}
