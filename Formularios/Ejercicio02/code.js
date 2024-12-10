window.onload = () =>{
    let formu = document.querySelector("form");
    formu[0].addEventListener('keydown', (ev) => {
        const NOTECLAS = ["Enter", "Backspace", "CapsLock", "Tab", "Escape", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "NumLock", "Delete","End", "PageDown", "Insert", "Shift", "Alt", "Control", "Meta", "AltGraph", "Dead"];
        if(!NOTECLAS.includes(ev.key)) formu[1].value += ev.key;
    });
}