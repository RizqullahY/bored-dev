javascript:(function(){
  async function placePixel(x, y, color) {
    await fetch("https://backend.wplace.live/s0/pixel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // tambahkan header Authorization / Cookie kalau perlu
      },
      body: JSON.stringify({ x: x, y: y, color: color })
    });
    console.log(`Pixel placed at (${x}, ${y}) color: ${color}`);
  }

  // minta input koordinat & warna
  let x1 = parseInt(prompt("Masukkan X awal:", "94"));
  let y1 = parseInt(prompt("Masukkan Y awal:", "1226"));
  let x2 = parseInt(prompt("Masukkan X akhir:", "108"));
  let y2 = parseInt(prompt("Masukkan Y akhir:", "1229"));
  let color = prompt("Masukkan warna (hex):", "#000000");

  // delay antar pixel (ubah sesuai cooldown server)
  let delay = 5000; 
  let tasks = [];

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      tasks.push([i, j]);
    }
  }

  tasks.forEach((coord, idx) => {
    setTimeout(() => {
      placePixel(coord[0], coord[1], color);
    }, idx * delay);
  });

  alert(`Bot mulai jalan!\nDari (${x1},${y1}) ke (${x2},${y2})\nWarna: ${color}`);
})();
