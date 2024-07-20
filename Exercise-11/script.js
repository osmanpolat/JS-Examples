//alışveriş sepet JS örneği

let sepet = [
  {
    urunAd: "Süt",
    fiyat: 25,
    adet: 3,
    hediyePuan: 2,
  },
  {
    urunAd: "Ketçap",
    fiyat: 35,
    adet: 2,
    hediyePuan: 3,
  },
  {
    urunAd: "Mayonez",
    fiyat: 30,
    adet: 5,
    hediyePuan: 1,
  },
  {
    urunAd: "Yumurta",
    fiyat: 2,
    adet: 15,
    hediyePuan: 0.5,
  },
];

function sepetBilgi(diziUrun) {
  console.log("Toplam Ürün:" + diziUrun.length);

  for (let i = 0; i < diziUrun.length; i++) {
    console.log(
      diziUrun[i].urunAd + ":" + diziUrun[i].fiyat * diziUrun[i].adet + " TL"
    );
    console.log("Puan:" + diziUrun[i].hediyePuan);
  }
}
sepetBilgi(sepet);
