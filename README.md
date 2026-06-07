# Web Undangan Digital

Desain ini dibuat semirip mungkin dari referensi: maroon, pintu pembuka, bulatan emas, header sekolah, kolase foto, ayat, dan detail undangan.

## Cara pakai
1. Buka `index.html` di browser.
2. Klik bulatan emas untuk membuka undangan.
3. Ganti dummy foto/logo di `index.html` atau `style.css`.

## Bagian gambar yang perlu diganti
- Background gedung: cari `.bg-building` di `style.css`, ganti URL gambar.
- Logo sekolah: ganti elemen `.logo-circle` dengan `<img src="assets/logo.png">`.
- Kolase foto: ganti isi `<div class="dummy-photo">` dengan `<img src="assets/foto-1.jpg" alt="...">` lalu tambahkan CSS `img{width:100%;height:100%;object-fit:cover}`.
- Foto siswa: saat ini dummy CSS. Bisa diganti dengan PNG cutout siswa di dalam `.student-row`.
