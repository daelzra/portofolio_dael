// Tutup menu mobile setelah tautan diklik
document.querySelectorAll('#menu .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

// Form kontak: validasi sederhana lalu buka aplikasi email
var formKontak = document.getElementById('form-kontak');
if (formKontak) formKontak.addEventListener('submit', function (e) {
  e.preventDefault();
  var nama = this.nama.value.trim(), email = this.email.value.trim(), pesan = this.pesan.value.trim();
  var status = document.getElementById('status');
  if (!nama || !pesan || !/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = 'Lengkapi nama, email yang valid, dan pesan.';
    return;
  }
  var body = encodeURIComponent(pesan + '\n\n— ' + nama + ' (' + email + ')');
  window.location.href = 'mailto:daffa.elzra14@gmail.com?subject=' + encodeURIComponent('Pesan dari ' + nama) + '&body=' + body;
  status.textContent = 'Membuka aplikasi email Anda...';
});
