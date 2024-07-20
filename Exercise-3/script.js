let fiyat = 3;
let adet = 7;
let tutar = fiyat * adet;
console.log("Tutar: " + tutar + " TL");

if (tutar > 50) {
  console.log("Kargo Ücretsiz");
} else if (tutar < 50) {
  console.log("Kargo Tutarı: 5 TL");

  let toplamtutar = tutar + 5;

  console.log("Kargo dahil tutar: " + toplamtutar + " TL");
}
