var namaSiswa = prompt("Nama Kamu");
var umurSiswa = prompt("Umur Kamu");
var jurusanSiswa = prompt("Jurusan Kamu");
const tagBaru = document.createElement("p");

document.getElementById("outputnama").innerHTML = namaSiswa;
document.getElementById("outputumur").innerHTML = umurSiswa;
document.getElementById("outputjurusan").innerHTML = jurusanSiswa;

if (umurSiswa >= 18) {
    tagBaru.innerHTML = "kamu sudah dewasa";
    document.body.appendChild(tagBaru);
}
else {
    tagBaru.innerHTML = "kamu belum dewasa";
    document.body.appendChild(tagBaru);
}