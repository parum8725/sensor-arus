// Contoh data dinamis (bisa diganti dengan data dari API atau sensor)
let no = 1;
let daya = 1200; // dalam Watt
let arus = 5; // dalam Ampere

// Update data ke dalam dashboard
document.getElementById('no').textContent = no;
document.getElementById('daya').textContent = daya + ' W';
document.getElementById('arus').textContent = arus + ' A';

// Contoh update data setiap 5 detik (simulasi)
setInterval(() => {
  daya += 10; // Simulasi penambahan daya
  arus += 0.1; // Simulasi penambahan arus

  document.getElementById('daya').textContent = daya + ' W';
  document.getElementById('arus').textContent = arus.toFixed(2) + ' A';
}, 5000);
