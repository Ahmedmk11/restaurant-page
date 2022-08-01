export default function mainLoader() {
    const frame = document.createElement('div');
    const title = document.createElement('h1');
    frame.id = 'frame';
    title.textContent = 'The Krusty Krab';
    frame.appendChild(title);
    return frame;
}
