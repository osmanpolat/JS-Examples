let fiyat = 33;
let adet = 5;
const KDV = 0.18;
let tutar = fiyat * adet;
let KDVliTutar = tutar + tutar * KDV;
console.log("Tutar:" + tutar + " TL");
console.log("KDV dahil tutar: " + KDVliTutar + " TL");
if (tutar > 50) {
  console.log("Kargo Ücretsiz");
} else if (tutar < 50) {
  console.log("Kargo tutarı: 5 TL");
  let KDVKargoToplamTutar = KDVliTutar + 5;
  console.log(
    "Kargo ve KDV dahil Toplam Tutar: " + KDVKargoToplamTutar + " TL"
  );
}

if (tutar > 200) {
  console.log("20 TL Puan Kazandınız");
} else if (tutar > 150) {
  console.log("15 TL Puan Kazandınız");
} else if (tutar > 100) {
  console.log("10 TL Puan Kazandınız");
} else {
  console.log("Puan Kazanamadınız");
}
