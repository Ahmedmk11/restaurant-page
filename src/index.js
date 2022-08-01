import mainLoader from './pages/main-page';
import menuLoader from './pages/menu-page';
import contactLoader from './pages/contact-page';
import './styles/style.css';

const main = (() => {
    const container = document.createElement('div');
    const frame = document.createElement('div');
    const footer = document.createElement('footer');
    const p1 = document.createElement('p');
    const github = document.createElement('a');
    const p2 = document.createElement('p');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');

    container.id = 'container';
    frame.id = 'frame';
    p1.textContent = 'Made by ';
    github.textContent = 'Ahmed Mahmoud';
    github.setAttribute('target', '_blank');
    github.setAttribute('href', 'https://github.com/Ahmedmk11');
    p2.textContent = 'Copyright © ';
    span1.textContent = '2022';
    span1.id = 'starting-year';
    span2.id = 'current-year';

    p2.appendChild(span1)
    p2.appendChild(span2)
    p1.appendChild(github);
    footer.appendChild(p1);
    footer.appendChild(p2);
    container.appendChild(frame);
    container.appendChild(footer);
    document.body.appendChild(container);

    let currentYear = new Date().getFullYear();
    let startYr = span1.textContent;
    if (startYr != currentYear) {
        span2.textContent = `-${currentYear}`;
    }
    mainLoader()
    return {container,frame}
})();