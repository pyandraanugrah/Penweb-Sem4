// Var
var angka1 = 7;

// Let
let angka2 = 8;

// Const
const angka3 = 9;

// Fungsi Cek Ganjil/Genap

function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        console.log(angka + " adalah bilangan genap.");
    } else {
        console.log(angka + " adalah bilangan ganjil.");
    }
}

// Pemanggilan fungsi
cekGanjilGenap(angka1);
cekGanjilGenap(angka2);
cekGanjilGenap(angka3);