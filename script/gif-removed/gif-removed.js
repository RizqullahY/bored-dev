(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll("img");
  
      images.forEach((img) => {
        const src = img.getAttribute("src");
        if (src && src.toLowerCase().endsWith(".gif")) {
          img.remove(); 
        }
      });
    });
})();
  