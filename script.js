// Mengambil referensi ke semua tombol "Copy" dengan class "copy-button"
const copyButtons = document.querySelectorAll(".copy-button");

// Menambahkan event listener ke setiap tombol "Copy"
copyButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Mengambil teks yang sesuai berdasarkan indeks tombol yang diklik
    const textToCopy = document.getElementById(
      `text-to-copy-${index + 1}`
    ).innerText;

    // Buat elemen textarea sementara
    const tempTextarea = document.createElement("textarea");

    // Set nilai teks di textarea sementara menjadi teks yang ingin Anda copy
    tempTextarea.value = textToCopy;

    // Menambahkan textarea sementara ke dokumen
    document.body.appendChild(tempTextarea);

    // Memilih teks di textarea
    tempTextarea.select();

    // Menyalin teks ke clipboard
    document.execCommand("copy");

    // Menghapus textarea sementara
    document.body.removeChild(tempTextarea);

    // Mengubah teks pada tombol menjadi "Copied"
    button.innerText = "Tersalin";

    // Menonaktifkan tombol setelah dicopy
    button.disabled = true;

    // Mengatur ulang teks tombol lainnya menjadi "Copy" dan mengaktifkannya
    copyButtons.forEach((otherButton, otherIndex) => {
      if (otherIndex !== index) {
        otherButton.innerText = "Salin";
        otherButton.disabled = false;
      }
    });
  });
});
