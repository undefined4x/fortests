"use strict"

let div = document.querySelector('div');

function scrollbottom(el) {
    return el.scrollHeight - el.scrollTop - el.clientHeight
}

scrollbottom(div);