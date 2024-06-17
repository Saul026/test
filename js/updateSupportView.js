let supportView;
export function updateSupportView() {
    const supportDiv = document.querySelector('.support');

    if (window.innerWidth > 1500) {
        if (supportView === 'desktop') return;
        supportView = 'desktop';
        console.log('switch to desktop');

        supportDiv.innerHTML = '';

        const paragraph = document.createElement('p');
        paragraph.classList.add('support__text');
        paragraph.textContent = ' Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: ';

        const span = document.createElement('span');
        span.classList.add('red-text');
        span.textContent = '«Плодотворная дебютная идея»';

        const image = document.createElement('img');
        image.classList.add('support__image');
        image.setAttribute('src', 'assets/support.png');
        image.setAttribute('alt', 'supprot-image');

        paragraph.appendChild(span);
        supportDiv.appendChild(paragraph);
        supportDiv.appendChild(image);
    } else {
        if (supportView === 'mobile') return;
        supportView = 'mobile';
        console.log('switch to mobile');

        supportDiv.innerHTML = '';
        const p1 = document.createElement('p');
        p1.className = 'support__text';
        p1.textContent = 'Чтобы поддержать Международный васюкинский турнир';

        const img = document.createElement('img');
        img.className = 'support__image';
        img.src = 'assets/support.png';
        img.alt = 'supprot-image';

        const p2 = document.createElement('p');
        p2.className = 'support__text';
        p2.innerHTML = 'посетите лекцию на тему: <span class="red-text"> «Плодотворная дебютная идея»</span>';

        supportDiv.appendChild(p1);
        supportDiv.appendChild(img);
        supportDiv.appendChild(p2);
    }
}
