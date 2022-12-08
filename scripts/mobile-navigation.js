function sideNav() {
    const nav = document.getElementById("sidenav");
    if (nav.style.width === '50%') {
        nav.style.width = '0';
        document.getElementById("menu-btn-id").src = "img/Menu.png";
    } else {
        nav.style.width = "50%";
        document.getElementById("menu-btn-id").src = "img/Menu_close.png";

    }
}
