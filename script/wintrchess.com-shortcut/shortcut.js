(function () {
  showShortcutPopup();

  function showShortcutPopup() {
    const box = document.createElement('div');
    box.innerHTML = `
      <div style="
        position: fixed; top: 20px; right: 20px; background: #fefefe; color: #222;
        padding: 14px 18px; border: 1px solid #aaa; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); font-family: sans-serif;
        font-size: 14px; line-height: 1.5; z-index: 9999;
      ">
        <strong>♟️ WinterChess Shortcuts</strong><br><br>
        ➡️ Arrow Right – Next move<br>
        ⬅️ Arrow Left – Last move<br>
        🏠 Home – Go to beginning<br>
        ⏭ End – Go to end<br>
        ␣ Space – Play/Pause
      </div>
    `;
    const popup = box.firstElementChild;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 7000);
  }

  function clickButtonByTitle(title) {
    const button = document.querySelector(`img[title="${title}"]`);
    if (button) {
      button.click();
    } else {
      console.warn(`Button with title "${title}" not found.`);
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      clickButtonByTitle("Next move");
    } else if (e.key === "ArrowLeft") {
      clickButtonByTitle("Last move");
    } else if (e.key === "Home") {
      clickButtonByTitle("Go to beginning");
    } else if (e.key === "End") {
      clickButtonByTitle("Go to end");
    } else if (e.key === " ") {
      e.preventDefault(); // cegah scroll
      const playButton = document.querySelector('div[title="Play"]');
      if (playButton) {
        playButton.click();
      }
    }
  });
})();
