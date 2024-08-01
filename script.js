document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var menuList = document.querySelector('.menu-list');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('hamburger-open');
        menuList.classList.toggle('active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Sayfa yüklendiğinde başlık animasyonunu başlat
    checkHeadingVisibility();
});

// Kullanıcı scroll yaptığında başlık animasyonunu başlat
window.addEventListener("scroll", function() {
    checkHeadingVisibility();
});

// Başlık görünürlüğünü kontrol eden fonksiyon
function checkHeadingVisibility() {
    var heading = document.querySelector("#services-right-h");

    if (isElementInViewport(heading)) {
        heading.classList.add("visible-heading");
    }
}


function isElementInViewport(el) {
    if (!el) {
        // Eğer element null veya undefined ise, false döndür
        return false;
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}