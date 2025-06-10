document.addEventListener('keydown', function(event) {
    if (!event.ctrlKey) return; // Hanya lanjut kalau tombol Ctrl ditekan

    switch(event.key.toLowerCase()) {
        case 'q':
            // Ctrl+Q → fokus dan hapus input
            const input = document.querySelector('#x-auto-133-input');
            if (input) {
                input.focus();
                input.value = '';
                console.log('✅ Input selected and cleared.');
            } else {
                console.warn('⚠️ Input tidak ditemukan.');
            }
            break;

        case 'w':
            // Ctrl+W → double-click baris
            const row = document.querySelector('#x-auto-146_x-auto-571');
            if (row) {
                const evt = new MouseEvent('dblclick', { bubbles: true, cancelable: true });
                row.dispatchEvent(evt);
                console.log('✅ Double-clicked on row.');
            } else {
                console.warn('⚠️ Baris tidak ditemukan.');
            }
            break;

        case 'e':
            // Ctrl+E → klik tombol close
            const closeBtn = document.querySelector('#x-auto-599');
            if (closeBtn) {
                closeBtn.click();
                console.log('✅ Close button clicked.');
            } else {
                console.warn('⚠️ Tombol close tidak ditemukan.');
            }
            break;
    }
});
