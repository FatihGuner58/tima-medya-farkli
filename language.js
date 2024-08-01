document.addEventListener('DOMContentLoaded', () => {
    // Çerezden mevcut dili oku
    const currentLanguage = getCookie('language') || 'tr'; // Varsayılan dil Türkçe

    // Sayfa yüklendiğinde mevcut dil tercihini uygula
    changeLanguage(currentLanguage);

    // Dil seçici olay dinleyicisi
    const languageSelector = document.getElementById('language-selector');

    if (languageSelector) {
        languageSelector.addEventListener('click', (event) => {
            const button = event.target;
            if (button.tagName === 'BUTTON') {
                const lang = button.getAttribute('data-lang');
                if (lang) {
                    changeLanguage(lang);
                    setCookie('language', lang, 30); // 30 gün geçerlilik süresi
                }
            }
        });
    }
});

// Dil değişimi
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-tr], [data-en], [data-fr]');
    
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
}

// Çerezden değer oku
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
}

// Çerezi ayarla
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}