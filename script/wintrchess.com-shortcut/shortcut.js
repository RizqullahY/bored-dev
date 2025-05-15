// shortcut-winterchess.js

(function () {
  console.log("WinterChess Shortcut Loaded");

  // Fungsi pencari tombol berdasarkan title
  function clickButtonByTitle(title) {
    const button = document.querySelector(`img[title="${title}"]`);
    if (button) {
      button.click();
    } else {
      console.warn(`Button with title "${title}" not found.`);
    }
  }

  // Tambah event listener ke tombol keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      clickButtonByTitle("Next move");
    } else if (e.key === "ArrowLeft") {
      clickButtonByTitle("Last move");
    } else if (e.key === "Home") {
      clickButtonByTitle("Go to beginning");
    } else if (e.key === "End") {
      clickButtonByTitle("Go to end");
    } else if (e.key === " ") { // tombol spasi untuk play
      const playButton = document.querySelector('div[title="Play"]');
      if (playButton) {
        playButton.click();
      }
    }
  });
})();
