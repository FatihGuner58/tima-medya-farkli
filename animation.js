document.addEventListener("DOMContentLoaded", function() {
    animateAboutContent();
});

// Kullanıcı scroll yaptığında animasyonları başlat
window.addEventListener("scroll", function() {
    animateAboutContent();
});

// Animasyonları tetikleyen fonksiyon
function animateAboutContent() {
    var aboutImage = document.querySelector(".about-image1");
    var aboutRight = document.querySelector(".about-right");

    if (isElementInViewport(aboutImage)) {
        aboutImage.classList.add("active");
    }
    if (isElementInViewport(aboutRight)) {
        aboutRight.classList.add("active");
    }
}

// Element viewport içinde mi kontrolü
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.media-plan, .performans-pazarlama, .büyük-veri-pazarlama, .programatik');

    function checkVisibility() {
        const viewportHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            // Eğer element görünürse `visible` sınıfını ekle
            if (elementTop < viewportHeight) {
                element.classList.add('visible');
            }
        });
    }

    // Sayfa yüklendiğinde ve kaydırıldığında kontrol et
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Sayfa ilk yüklendiğinde kontrol et
});
document.addEventListener("mousemove", parallax);

function parallax(e) {
    // Ekran genişliği ve yüksekliği
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Fare pozisyonu
    const x = e.clientX;
    const y = e.clientY;

    // Fare pozisyonuna göre hareket miktarını hesapla
    const moveX = (x / width - 0.5) * 20; // X ekseninde hareket (değeri ayarlayabilirsiniz)
    const moveY = (y / height - 0.5) * 20; // Y ekseninde hareket (değeri ayarlayabilirsiniz)

    // Tüm köşe resimlerini seç
    const cornerImages = document.querySelectorAll(".corner-image");

    // Her resme hareket uygulayın
    cornerImages.forEach(image => {
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) { // Sayfa 10 piksel kaydırıldıysa
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});