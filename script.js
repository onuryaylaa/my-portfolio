
console.log("JavaScript başarıyla çalışıyor!");

// HTML elemanlarını seçiyoruz
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Elemanlar bulundu mu kontrol ediyoruz
console.log("Menü butonu:", menuToggle);
console.log("Menü bağlantıları:", navLinks);

// Menü butonuna tıklama olayı
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        console.log("Menü durumu:", isOpen ? "Açık" : "Kapalı");

    });

} else {
    console.error("Menü elemanları bulunamadı!");
}
function showMessage() {
    alert("Ben Onur! Yazılım dünyasında kendimi geliştirmeye devam ediyorum.");
}