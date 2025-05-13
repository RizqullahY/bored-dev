(() => {
  let isScrolling = false;
  let scrollInterval;
  let speed = 2;
  let indicator;

  function createIndicator() {
    indicator = document.createElement('div');
    indicator.id = 'autoScrollIndicator';
    indicator.style.position = 'fixed';
    indicator.style.bottom = '20px';
    indicator.style.right = '20px';
    indicator.style.padding = '10px 15px';
    indicator.style.backgroundColor = 'rgba(0,0,0,0.7)';
    indicator.style.color = '#fff';
    indicator.style.fontSize = '14px';
    indicator.style.borderRadius = '5px';
    indicator.style.zIndex = '9999';
    indicator.style.fontFamily = 'sans-serif';
    indicator.innerText = `Auto Scroll: OFF`;
    document.body.appendChild(indicator);
  }

  function updateIndicator() {
    if (!indicator) createIndicator();
    indicator.innerText = isScrolling
      ? `Auto Scroll: ON\nSpeed: ${speed}px`
      : `Auto Scroll: OFF`;
  }

  function startScroll() {
    scrollInterval = setInterval(() => {
      window.scrollBy(0, speed);
    }, 30);
  }

  function stopScroll() {
    clearInterval(scrollInterval);
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      isScrolling = !isScrolling;
      isScrolling ? startScroll() : stopScroll();
      updateIndicator();
    }

    // Optional: adjust speed with up/down arrows
    if (e.code === 'ArrowUp') {
      speed += 1;
      updateIndicator();
    }
    if (e.code === 'ArrowDown') {
      speed = Math.max(1, speed - 1);
      updateIndicator();
    }
  });

  createIndicator();
})();
