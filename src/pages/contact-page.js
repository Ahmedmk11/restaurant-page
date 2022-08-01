export default function contactLoader() {
    const frame = document.createElement('div');
    const title = document.createElement('h1');
    frame.id = 'frame';
    title.textContent = 'Contact Us';
    frame.appendChild(title);
    return frame;
}
