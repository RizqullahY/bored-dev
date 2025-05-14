(function () {
  if (window.__simpleNotepad__) return; // Cegah duplikat
  window.__simpleNotepad__ = true;

  const style = document.createElement("style");
  style.textContent = `
    #simple-notepad {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      height: 200px;
      background: #fff;
      border: 1px solid #aaa;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      z-index: 9999;
      display: flex;
      flex-direction: column;
      font-family: sans-serif;
      border-radius: 8px;
    }
    #simple-notepad-header {
      background: #f0f0f0;
      padding: 5px 10px;
      cursor: move;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
    #simple-notepad textarea {
      flex: 1;
      padding: 10px;
      border: none;
      resize: none;
      outline: none;
      font-size: 14px;
    }
    #simple-notepad button {
      border: none;
      background: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
    }
    #simple-notepad.minimized textarea {
      display: none;
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
  `;
  document.body.appendChild(pad);

  const minimizeBtn = document.getElementById("minimize-btn");
  const closeBtn = document.getElementById("close-btn");
  minimizeBtn.onclick = () => {
    pad.classList.toggle("minimized");
    minimizeBtn.textContent = pad.classList.contains("minimized") ? "+" : "–";
  };
  closeBtn.onclick = () => {
    document.body.removeChild(pad);
    window.__simpleNotepad__ = false;
  };

  // Drag and move
  const header = document.getElementById("simple-notepad-header");
  let isDragging = false, offsetX = 0, offsetY = 0;

  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - pad.offsetLeft;
    offsetY = e.clientY - pad.offsetTop;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      pad.style.left = `${e.clientX - offsetX}px`;
      pad.style.top = `${e.clientY - offsetY}px`;
      pad.style.right = "auto";
      pad.style.bottom = "auto";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "";
  });
})();
