let fiyat = 14;
let adet = 3;
let tutar = fiyat * adet;
console.log("Tutar:" + tutar + " TL");
if (tutar > 50) {
  console.log("Kargo ücretsiz");
} else if (tutar < 50) {
  console.log("Kargo tutarı: 5 TL");
  let fark = 50 - tutar;

  console.log(fark + " TL" + " daha harcayın kargo bedava olsun");
}
