(function () {
  console.log("Shortcut Ready")

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
