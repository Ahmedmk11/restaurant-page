export default function menuLoader() {
    const frame = document.createElement('div');
    const title = document.createElement('h1');
    const t = document.createElement('div');
    const b = document.createElement('div');
    const tl = document.createElement('div');
    const tr = document.createElement('div');
    const bl = document.createElement('div');
    const br = document.createElement('div');
    
    const p1 = document.createElement('p');
    p1.textContent = 'KRABBY PATTY.................. 1.25';
    const p2 = document.createElement('p');
    p2.textContent = 'w/sea cheese............... 1.50';
    p2.classList.add('right');
    const p3 = document.createElement('p');
    p3.textContent = 'DOUBLE KRABBY PATTY.. 2.00';
    const p4 = document.createElement('p');
    p4.textContent = 'w/sea cheese............. 2.25';
    p4.classList.add('right');
    const p5 = document.createElement('p');
    p5.textContent = 'TRIPLE KRABBY PATTY.... 3.00';
    const p6 = document.createElement('p');
    p6.textContent = 'w/sea cheese............. 3.25';
    p6.classList.add('right');

    const p7 = document.createElement('p');
    p7.textContent = 'KRABBY MEAL................... 3.50';
    const p8 = document.createElement('p');
    p8.textContent = 'DOUBLE KRABBY MEAL... 3.75';
    const p9 = document.createElement('p');
    p9.textContent = 'TRIPLE KRABBY MEAL..... 4.00';
    const p10 = document.createElement('p');
    p10.textContent = 'SALTY SEA DOG................. 1.25';
    const p11 = document.createElement('p');
    p11.textContent = 'FOOTLONG.......................... 2.00';
    const p12 = document.createElement('p');
    p12.textContent = 'SAILORS SURPRISE........... 3.00';
    const p13 = document.createElement('p');
    p13.textContent = 'GOLDEN LOAF..................... 2.00';
    const p14 = document.createElement('p');
    p14.textContent = 'w/sauce...................... 2.50';
    p14.classList.add('right');

    const p15 = document.createElement('p');
    p15.textContent = 'CORAL BITS';
    p15.setAttribute('style', 'font-size: 2rem;')
    const p16 = document.createElement('p');
    p16.textContent = 'SMALL.................................... 1.00';
    const p17 = document.createElement('p');
    p17.textContent = 'MEDIUM................................. 1.25';
    const p18 = document.createElement('p');
    p18.textContent = 'LARGE.................................... 1.50';
    const p19 = document.createElement('p');
    p19.textContent = 'KELP RINGS.......................... 1.50';
    const p20 = document.createElement('p');
    p20.textContent = 'salty sauce..................... .50';
    p20.classList.add('right');

    const p21 = document.createElement('p');
    p21.textContent = 'KELP SHAKE...................... 2.00';
    const p22 = document.createElement('p');
    p22.textContent = 'SEAFOAM SODA';
    p22.setAttribute('style', 'align-self: center;')
    const p23 = document.createElement('p');
    p23.textContent = 'Small... 1.00';
    p23.setAttribute('style', 'align-self: center;')
    const p24 = document.createElement('p');
    p24.textContent = 'Medium... 1.25';
    p24.setAttribute('style', 'align-self: center;')
    const p25 = document.createElement('p');
    p25.textContent = 'Large... 1.50';
    p25.setAttribute('style', 'align-self: center;')

    tl.appendChild(p1);
    tl.appendChild(p2);
    tl.appendChild(p3);
    tl.appendChild(p4);
    tl.appendChild(p5);
    tl.appendChild(p6);
    tr.appendChild(p7);
    tr.appendChild(p8);
    tr.appendChild(p9);
    tr.appendChild(p10);
    tr.appendChild(p11);
    tr.appendChild(p12);
    tr.appendChild(p13);
    tr.appendChild(p14);
    bl.appendChild(p15);
    bl.appendChild(p16);
    bl.appendChild(p17);
    bl.appendChild(p18);
    bl.appendChild(p19);
    bl.appendChild(p20);
    br.appendChild(p21);
    br.appendChild(p22);
    br.appendChild(p23);
    br.appendChild(p24);
    br.appendChild(p25);

    frame.id = 'frame';
    title.textContent = 'Galley Grub';
    title.id = 'menuTitle';
    t.id = 'topMenu';
    b.id = 'bottomMenu';
    br.id = 'br';
    t.appendChild(tl);
    t.appendChild(tr);
    b.appendChild(bl);
    b.appendChild(br);
    frame.appendChild(title);
    frame.appendChild(t);
    frame.appendChild(b);
    return frame;
}
