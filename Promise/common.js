function log(text) {
    console.log(text)
}

function logToHtml(text, el) {
    const p = document.createElement('p')
    p.innerHTML = text
    el.appendChild(p)
}

function getEl(el) {
    return document.querySelector(el)
}