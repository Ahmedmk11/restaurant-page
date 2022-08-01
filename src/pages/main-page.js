export default function mainLoader() {
    const frame = document.createElement('div');
    const title = document.createElement('h1');
    const about = document.createElement('div');
    const history = document.createElement('div');
    const aboutTitle = document.createElement('h2');
    const historyTitle = document.createElement('h2');
    const aboutP = document.createElement('p');
    const historyP = document.createElement('p');

    title.textContent = 'The Krusty Krab';
    about.classList.add('containers');
    history.classList.add('containers');
    aboutTitle.textContent = 'About';
    aboutP.textContent = 'We are the most successful restaurant in all of Bikini Bottom.\
    Our secret formula is 800 years old and loved by everyone! Come Spend Your Money Here!';
    historyTitle.textContent = 'History';
    historyP.textContent = 'After the war, Krabs stayed secluded in a deep depression that seemed endless.\
    But then his luck changed when he acquired a bankrupt retirement home and with a few minor alterations,\
    the Krusty Krab was born!'

    about.id = 'about';
    history.id = 'history';
    frame.id = 'frame';

    about.appendChild(aboutTitle);
    about.appendChild(aboutP);
    history.appendChild(historyTitle);
    history.appendChild(historyP);
    frame.appendChild(title);
    frame.appendChild(about);
    frame.appendChild(history);
    return frame;
}
