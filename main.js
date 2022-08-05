


function themechange() {
    let x = document.body
    if (x.style.background === "darkgrey") {
        x.style.background = "beige"
    } else {
        x.style.background = "darkgrey"
    }
}


function togglemove() {
    let x = document.getElementById("ball")
    if (x.style.left === "10px") {
        x.style.left = "-10px"
    } else {
        x.style.left = "10px"
    }
}


function bgnav() {
    let x = document.getElementById("nav-bar")
    if (x.style.background === "grey") {
        x.style.background = "#efefef"
    } else {
        x.style.background = "grey"
    }
}


function itsowncolor() {
    let x = document.getElementById("toggle-btn")
    if (x.style.background === "white") {
        x.style.background = "grey"
    } else {
        x.style.background = "white"
    }
}
function navlinksdisplay() {
    let x = document.getElementById("links-for-mini-width")
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}


