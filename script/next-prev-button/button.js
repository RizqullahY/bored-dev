javascript:(function(){
  document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){ 
      let nextBtn = document.querySelector('.h5p-question-next');
      if(nextBtn) nextBtn.click();
    }
    if(e.key === 'ArrowLeft'){ 
      let prevBtn = document.querySelector('.h5p-question-prev');
      if(prevBtn) prevBtn.click();
    }
  });
  alert('✅ Keyboard navigation aktif!\n➡ Arrow Kanan = Next\n⬅ Arrow Kiri = Previous');
})();
