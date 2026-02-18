javascript:(function(){
  document.addEventListener('keydown', function(e){

    if(e.key === 'ArrowRight'){ 
      let nextBtn = Array.from(document.querySelectorAll('a'))
        .find(a => a.textContent.trim().toUpperCase().includes('NEXT'));
      if(nextBtn) nextBtn.click();
    }

    if(e.key === 'ArrowLeft'){ 
      let prevBtn = Array.from(document.querySelectorAll('a'))
        .find(a => a.textContent.trim().toUpperCase().includes('PREV'));
      if(prevBtn) prevBtn.click();
    }

  });

  alert('✅ Keyboard navigation aktif!\n➡ Arrow Kanan = NEXT\n⬅ Arrow Kiri = PREV');
})();
