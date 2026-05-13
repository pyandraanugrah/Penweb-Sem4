const angkarahasia = 5;

let tebakan = 5;

// Fungsi untuk mengecek tebakan
function cekTebakan(tebakan) {
    if (tebakan === angkarahasia) {
        console.log("Tebakan benar!");
    } 
    else {
        console.log("Tebakan salah!");
    }
}

// Pemanggilan fungsi
cekTebakan(tebakan);