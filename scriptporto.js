// Tangkap elemen tombol dan container sertifikat
const showCertificatesBtn = document.getElementById("show-certificates-btn");
const certificatesContainer = document.getElementById("certificates-container");

// Tambahkan event listener ke tombol
showCertificatesBtn.addEventListener("click", () => {
    // Periksa apakah sertifikat sudah terlihat
    if (certificatesContainer.style.display === "none") {
        // Tampilkan sertifikat
        certificatesContainer.style.display = "flex";
        showCertificatesBtn.textContent = "Sembunyikan Sertifikat";
    } else {
        // Sembunyikan sertifikat
        certificatesContainer.style.display = "none";
        showCertificatesBtn.textContent = "Lihat Semua Sertifikat";
    }
});
