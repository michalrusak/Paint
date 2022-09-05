const board = document.querySelector('.board');
const clearBtn = document.querySelector('.clear');
let flag = false;

function paint (e) {
    if(!flag) return;
    
    const x = e.clientX;
    const y = e.clientY;

    const div = document.createElement('div');
    div.classList.add('pen')
    div.style.left = x + "px";
    div.style.top = y + "px";

    const size = document.querySelector('.size').value;
    if(size<1) return;
    div.style.height = size + 'px';
    div.style.width = size + 'px';

    const eraser = document.querySelector('#eraser').checked;
    let color = document.querySelector('.color').value;
    if(eraser) color = 'white';
    div.style.backgroundColor = color;

    const circle = document.querySelector('#circle').checked;
    if(circle) div.classList.add('circle');
    
    board.appendChild(div);
    
}
function active () {
    flag = !flag
}

function clear () {
    board.innerHTML = '';
}

window.addEventListener('mousedown', active);
window.addEventListener('mousemove', paint);
window.addEventListener('mouseup', active);

window.addEventListener('touchstart', active);
window.addEventListener('touchmove', paint);
window.addEventListener('touchend', active);

clearBtn.addEventListener('click', clear);


function capture() {
    html2canvas(board).then((canvas) => {
        let a = document.createElement("a");
        a.download = "image.png";
        a.href = canvas.toDataURL("image/png");
        a.click();
    });
}

const saveBtn = document.querySelector('.save');
saveBtn.addEventListener('click', capture)
