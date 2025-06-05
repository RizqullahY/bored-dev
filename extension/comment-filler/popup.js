document.getElementById("fillBtn").addEventListener("click", async () => {
    const comment = document.getElementById("comment").value;
  
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (message) => {
        const textarea = document.querySelector(".wl-editor");
        if (textarea) {
          textarea.value = message;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
          alert("Tidak ditemukan textarea dengan class 'wl-editor'.");
        }
      },
      args: [comment]
    });
  });
  