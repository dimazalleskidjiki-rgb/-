
const CONFIG = {
  apkUrl: "https://files.fm/f/wn43pwh4k5dnxmqj",
  launcherUrl: "https://files.fm/f/wn43pwh4k5dnxmqj",
  telegramUrl: "https://t.me/laboratoryrazrab",
  forumUrl: "https://yard-rp.samp.date/index.php"
};

document.addEventListener("DOMContentLoaded", () => {
  // Кнопки скачивания
  document.querySelectorAll(".download-link").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const type = button.dataset.download;
      const url = type === "launcher"
        ? CONFIG.launcherUrl
        : CONFIG.apkUrl;

      if (url) {
        window.location.href = url;
      } else {
        alert("Ссылка для скачивания не указана.");
      }
    });
  });

  // Кнопки форума и Telegram
  document.querySelectorAll("[data-social]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const type = button.dataset.social;
      const url = type === "telegram"
        ? CONFIG.telegramUrl
        : CONFIG.forumUrl;

      if (url) {
        window.location.href = url;
      } else {
        alert("Ссылка пока не добавлена.");
      }
    });
  });

  // Мобильное меню
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("active");
    });
  }

  // Текущий год
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

