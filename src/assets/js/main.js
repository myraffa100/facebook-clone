

// Mengisi tanggal
const tanggalSelect = document.getElementById('tanggalLahir');
let tanggalOptions = '';
for (let i = 1; i <= 31; i++) {
  tanggalOptions += `<option value="${i}">${i}</option>`;
}
tanggalSelect.innerHTML = tanggalOptions;

// Mengisi bulan
const bulanSelect = document.getElementById('bulanLahir');
const bulanNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
let bulanOptions = '';
bulanNames.forEach((bulan, index) => {
  bulanOptions += `<option value="${index + 1}">${bulan}</option>`;
});
bulanSelect.innerHTML = bulanOptions;

// Mengisi tahun
const tahunSelect = document.getElementById('tahunLahir');
const currentYear = new Date().getFullYear();
let tahunOptions = '';
for (let i = currentYear; i >= 1950; i--) {
  tahunOptions += `<option value="${i}">${i}</option>`;
}
tahunSelect.innerHTML = tahunOptions;
