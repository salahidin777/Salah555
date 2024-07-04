const button = document.getElementById('fon');
const text = document.getElementById('text');
const body = document.body;

let i = false;

function toggleTheme() {
    if (i) {
        body.style.backgroundColor = 'white';
        text.style.color = 'black';
    }else {
        body.style.backgroundColor = 'black';
        text.style.color = 'white';
    }
    
    i = !i;
}

button.addEventListener('click', toggleTheme);