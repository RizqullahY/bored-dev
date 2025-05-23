(function () {
  if (window.__simpleNotepad__) return;
  window.__simpleNotepad__ = true;

  const style = document.createElement("style");
  style.textContent = `
    #simple-notepad {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      height: 200px;
      min-width: 200px;
      min-height: 100px;
      background: #fff;
      border: 1px solid #aaa;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      z-index: 999999;
      display: flex;
      flex-direction: column;
      font-family: sans-serif;
      border-radius: 8px;
      resize: none;
      overflow: hidden;
    }
    #simple-notepad.minimized {
      height: 40px !important;
    }
    #simple-notepad-header {
      background: #f0f0f0;
      padding: 5px 10px;
      cursor: move;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      user-select: none;
    }
    #simple-notepad textarea {
      flex: 1;
      padding: 10px;
      border: none;
      resize: none;
      outline: none;
      font-size: 14px;
    }
    #simple-notepad.minimized textarea {
      display: none;
    }
    #simple-notepad button {
      border: none;
      background: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
    }
    #simple-notepad-resizer {
      position: absolute;
      width: 15px;
      height: 15px;
      right: 0;
      bottom: 0;
      cursor: se-resize;
      background: transparent;
    }
  `;
  document.head.appendChild(style);

  const pad = document.createElement("div");
  pad.id = "simple-notepad";
  pad.innerHTML = `
    <div id="simple-notepad-header">
      <span>📝 Notepad</span>
      <div>
        <button id="minimize-btn">–</button>
        <button id="close-btn">×</button>
      </div>
    </div>
    <textarea placeholder="Tulis sesuatu..."></textarea>
    <div id="simple-notepad-resizer"></div>
  `;
  document.body.appendChild(pad);

  const minimizeBtn = document.getElementById("minimize-btn");
  const closeBtn = document.getElementById("close-btn");
  const resizer = document.getElementById("simple-notepad-resizer");
  const textarea = pad.querySelector("textarea");

  let isMinimized = false;
  let lastHeight = pad.offsetHeight;

  minimizeBtn.onclick = () => {
    isMinimized = !isMinimized;
    if (isMinimized) {
      lastHeight = pad.offsetHeight;
      pad.classList.add("minimized");
      minimizeBtn.textContent = "+";
    } else {
      pad.classList.remove("minimized");
      pad.style.height = lastHeight + "px";
      minimizeBtn.textContent = "–";
    }
  };

  closeBtn.onclick = () => {
    pad.remove();
    style.remove();
    window.__simpleNotepad__ = undefined;
  };

  // Drag Move
  const header = document.getElementById("simple-notepad-header");
  let isDragging = false, offsetX = 0, offsetY = 0;

  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - pad.offsetLeft;
    offsetY = e.clientY - pad.offsetTop;
    pad.style.left = `${pad.offsetLeft}px`;
    pad.style.top = `${pad.offsetTop}px`;
    pad.style.right = "auto";
    pad.style.bottom = "auto";
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      pad.style.left = `${e.clientX - offsetX}px`;
      pad.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });

  // Resize from bottom-right
  let isResizing = false, startX, startY, startWidth, startHeight;
  resizer.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = pad.offsetWidth;
    startHeight = pad.offsetHeight;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (isResizing) {
      let newWidth = startWidth + (e.clientX - startX);
      let newHeight = startHeight + (e.clientY - startY);
      if (newWidth >= 200) pad.style.width = newWidth + "px";
      if (newHeight >= 100 && !isMinimized) pad.style.height = newHeight + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
  });
})();
