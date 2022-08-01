import mainLoader from './pages/main-page';
import menuLoader from './pages/menu-page';
import contactLoader from './pages/contact-page';
import './styles/style.css';

const main = (() => {
    let frame = mainLoader();
    const container = document.createElement('div');
    const footer = document.createElement('footer');
    const p1 = document.createElement('p');
    const github = document.createElement('a');
    const p2 = document.createElement('p');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const buttonContainer = document.createElement('div');
    const about = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    container.id = 'container';
    p1.textContent = 'Made by ';
    github.textContent = 'Ahmed Mahmoud';
    github.setAttribute('target', '_blank');
    github.setAttribute('href', 'https://github.com/Ahmedmk11');
    p2.textContent = 'Copyright © ';
    span1.textContent = '2022';
    span1.id = 'starting-year';
    span2.id = 'current-year';
    buttonContainer.id = 'btn-container';
    about.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    about.classList.add('active');

    buttonContainer.appendChild(about);
    buttonContainer.appendChild(menu);
    buttonContainer.appendChild(contact);
    p2.appendChild(span1);
    p2.appendChild(span2);
    p1.appendChild(github);
    footer.appendChild(p1);
    footer.appendChild(p2);
    container.appendChild(frame);
    container.appendChild(footer);
    document.body.appendChild(buttonContainer);
    document.body.appendChild(container);

    about.addEventListener('click', () => {
        about.classList.add('active');
        menu.classList.remove('active');
        contact.classList.remove('active');
        frame = mainLoader();
        container.innerHTML = '';
        container.appendChild(frame);
        container.appendChild(footer);
    });
    
    menu.addEventListener('click', () => {
        about.classList.remove('active');
        menu.classList.add('active');
        contact.classList.remove('active');
        frame = menuLoader();
        container.innerHTML = '';
        container.appendChild(frame);
        container.appendChild(footer);
    });
    
    contact.addEventListener('click', () => {
        about.classList.remove('active');
        menu.classList.remove('active');
        contact.classList.add('active');
        frame = contactLoader()
        container.innerHTML = '';
        container.appendChild(frame);
        container.appendChild(footer);
    });

    let currentYear = new Date().getFullYear();
    let startYr = span1.textContent;
    if (startYr != currentYear) {
        span2.textContent = `-${currentYear}`;
    }
})();