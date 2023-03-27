import { el, els, ev } from "./functions.js";

const mobileMenu = el('.mobile-menu');
const mobileMenuPanel = el('.mobile-menu-panel');
const mobileMenuBtn = el('.mobile-menu-btn');
const mobileMenuPanelCloseBtn = el('.mobile-menu-panel--close > .btn');

// mobileMenuBtn.addEventListener('click', mobileMenuOpen);
// mobileMenuPanelCloseBtn.addEventListener('click', mobileMenuClose);

ev(mobileMenuBtn, 'click', mobileMenuOpen);
ev(mobileMenuPanelCloseBtn, 'click', mobileMenuClose);

const display = "d"; // css display: block;
const opacity = "a"; // css opacity: 1;
const transform = "open"; // css transform: translateX(-250px);

function mobileMenuOpen() {
    mobileMenu.classList.add(display);
    setTimeout(function () {
        mobileMenu.classList.add(opacity);
        mobileMenuPanelOpen();
    }, 200);
}

function mobileMenuClose() {
    mobileMenuPanelClose();
    setTimeout(function () {
        mobileMenu.classList.remove(opacity);
        setTimeout(function () {
            mobileMenu.classList.remove(display);
        }, 200);
    }, 200);
}

function mobileMenuPanelOpen() {
    mobileMenu.classList.add(transform);
}

function mobileMenuPanelClose() {
    mobileMenu.classList.remove(transform);
}