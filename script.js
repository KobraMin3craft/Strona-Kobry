// NAWIGACJA MIĘDZY SEKCJAMI
const navButtons = document.querySelectorAll(".nav-btn, .primary-btn, .ghost-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach(btn => {
    const target = btn.getAttribute("data-section");
    if (!target) return;

    btn.addEventListener("click", () => {
        sections.forEach(sec => sec.classList.remove("active"));
        const el = document.getElementById(target);
        if (el) el.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// SERIA – ANIMACJA + PRZEJŚCIE DO ODCINKA
const seriesVideoCard = document.getElementById("seriesVideoCard");
const videoAnimOverlay = document.getElementById("videoAnimOverlay");

// PODMIEŃ NA PRAWDZIWY LINK DO ODCINKA
const seriesVideoUrl = "https://www.youtube.com/watch?v=TWÓJ_ODCINEK_ID";

if (seriesVideoCard && videoAnimOverlay) {
    seriesVideoCard.addEventListener("click", () => {
        videoAnimOverlay.classList.add("active");
        setTimeout(() => {
            window.open(seriesVideoUrl, "_blank");
            videoAnimOverlay.classList.remove("active");
        }, 1400); // czas animacji
    });

    videoAnimOverlay.addEventListener("click", () => {
        videoAnimOverlay.classList.remove("active");
    });
}

// YOUTUBE – ANIMACJA + PRZEJŚCIE NA KANAŁ
const youtubeCard = document.getElementById("youtubeCard");
// PODMIEŃ NA SWÓJ KANAŁ
const youtubeChannelUrl = "https://www.youtube.com/@TwojKanal";

if (youtubeCard) {
    youtubeCard.addEventListener("click", () => {
        youtubeCard.classList.add("yt-anim");
        setTimeout(() => {
            window.open(youtubeChannelUrl, "_blank");
            youtubeCard.classList.remove("yt-anim");
        }, 900);
    });
}

// DISCORD – KOPIOWANIE NICKU I LINKU
const copyDiscordBtn = document.getElementById("copyDiscordBtn");
const copyDiscordServerBtn = document.getElementById("copyDiscordServerBtn");
const discordTagSpan = document.getElementById("discordTag");
const discordServerSpan = document.getElementById("discordServer");

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Skopiowano: " + text);
    }).catch(() => {
        alert("Nie udało się skopiować. Skopiuj ręcznie: " + text);
    });
}

if (copyDiscordBtn && discordTagSpan) {
    copyDiscordBtn.addEventListener("click", () => {
        copyText(discordTagSpan.textContent.trim());
    });
}

if (copyDiscordServerBtn && discordServerSpan) {
    copyDiscordServerBtn.addEventListener("click", () => {
        copyText(discordServerSpan.textContent.trim());
    });
}

// PRZYKŁADOWA ZMIANA STATUSU DISCORDA (MOŻESZ SOBIE RĘCZNIE PODMIENIAĆ)
const discordStatusDot = document.getElementById("discordStatusDot");
const discordStatusText = document.getElementById("discordStatusText");

// Jeśli kiedyś będziesz chciał zasymulować offline:
// discordStatusDot.classList.remove("status-online");
// discordStatusDot.classList.add("status-offline");
// discordStatusText.textContent = "Status: Offline";
