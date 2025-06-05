chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const images = document.querySelectorAll("img");
        images.forEach((img) => {
          const src = img.getAttribute("src");
          if (src && src.toLowerCase().endsWith(".gif")) {
            img.remove();
          }
        });
      }
    });
  });
  