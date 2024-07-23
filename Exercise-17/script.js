let ogrenciler = [
  { ad: "Ali", soyad: "Yılmaz", yas: 20 },
  { ad: "Ayşe", soyad: "Kara", yas: 22 },
  { ad: "Mehmet", soyad: "Demir", yas: 21 },
  { ad: "Fatma", soyad: "Çelik", yas: 23 },
  { ad: "Ahmet", soyad: "Kaya", yas: 19 },
  { ad: "Zeynep", soyad: "Güneş", yas: 24 },
  { ad: "Hüseyin", soyad: "Arslan", yas: 16 },
  { ad: "Elif", soyad: "Taş", yas: 20 },
  { ad: "Mustafa", soyad: "Aydın", yas: 21 },
  { ad: "Emine", soyad: "Yıldırım", yas: 17 },
];

console.log(ogrenciler);

let filtrelenmisOgrenciler = ogrenciler;

window.onload = function () {
  renderOgrenciler();

  // buton1 elementini seç ve ekleme olayını dinle
  let buton1 = document.getElementById("btn1");
  buton1.addEventListener("click", ogrenciEkle);

  //buton2 elementini seç ve silme olayını tetikle
  let buton2 = document.getElementById("btn2");
  buton2.addEventListener("click", ogrenciSil);

  //buton3 elementini seç ve güncelleme olayını tetikle
  let buton3 = document.getElementById("btn3");
  buton3.addEventListener("click", ogrenciGuncelle);

  //buton4 elementini seç ve alfabetik sırala
  let buton4 = document.getElementById("btn4");
  buton4.addEventListener("click", alfabetikSiralama);

  //buton5 elementini seç ve rastgele öğrenci gösterme
  let buton5 = document.getElementById("btn5");
  buton5.addEventListener("click", rastgeleOgrenciGoster);

  //buton6 elementini seç ve 18 yaş üstü öğrenci gösterme
  let buton6 = document.getElementById("btn6");
  buton6.addEventListener("click", onsekizYasUstuOgr);
};

function renderOgrenciler() {
  // #kutu elementini seç ve içeriğini temizle
  const kokEleman = document.querySelector("#kutu1");
  kokEleman.innerHTML = "";

  // ogrenciler arrayini döngü ile dolaş ve her bir öğrenci için <p> etiketi oluştur
  filtrelenmisOgrenciler.forEach((ogrenci, index) => {
    const pgrf = document.createElement("p");
    pgrf.textContent = `
         ${index + 1}.${ogrenci.ad}, ${ogrenci.soyad}, ${ogrenci.yas} yaşında
        
        `;

    kokEleman.append(pgrf);
  });
}

// yeni öğrenci ekleyen fonksiyon
function ogrenciEkle() {
  let ad = prompt("Öğrenci adınızı giriniz");
  let soyad = prompt("Öğrenci soyadınızı giriniz");
  let yas = prompt("Yaşınızı giriniz");
  // yeni öğrenci objecti oluştur ve ogrenciler arrayine ekle
  let yeniOgrenci = { ad: ad, soyad: soyad, yas: parseInt(yas) };
  ogrenciler.push(yeniOgrenci);

  // Filtre uygulanmışsa, filtrelenmisOgrenciler arrayini de güncelle
  if (filtrelenmisOgrenciler !== ogrenciler) {
    filtrelenmisOgrenciler.push(yeniOgrenci);
  }

  // listeyi tekrar render et
  renderOgrenciler();
}
//öğrenci silme fonksiyon
function ogrenciSil() {
  let ogrencisirasi = prompt(
    `Silinecek öğrenci sırasını girin 1-${filtrelenmisOgrenciler.length}:`
  );
  // girilen sıra numarasını kontrol et ve ogrenciler arrayinden sil
  let index = parseInt(ogrencisirasi) - 1;
  if (index >= 0 && index < filtrelenmisOgrenciler.length) {
    let silinicekOgrenci = filtrelenmisOgrenciler[index];
    let ogrenciIndex = ogrenciler.indexOf(silinicekOgrenci);
    if (ogrenciIndex !== -1) {
      ogrenciler.splice(ogrenciIndex, 1);
    }
    //filtrelenmiş öğrenci sil
    filtrelenmisOgrenciler.splice(index, 1);
    // listeyi tekrar render et
    renderOgrenciler();
  } else {
    alert("Geçersiz sıra numarası");
  }
}
//öğrenci güncelleme fonksiyon
function ogrenciGuncelle() {
  let ogrencisirasi = prompt(
    `Güncellenecek öğrenci sırasını girin 1-${filtrelenmisOgrenciler.length}:`
  );

  // girilen sıra numarasını kontrol et
  let index = parseInt(ogrencisirasi) - 1;
  if (index >= 0 && index < filtrelenmisOgrenciler.length) {
    let ad = prompt("Öğrencinin yeni adını girin:");
    let soyad = prompt("Öğrencinin yeni soyadını girin:");

    /* // öğrenci bilgilerini güncelle
          ogrenciler[index].ad = ad
          ogrenciler[index].soyad = soyad  */

    // öğrenci bilgilerini güncelle
    let ogrenci = filtrelenmisOgrenciler[index];
    ogrenci.ad = ad;
    ogrenci.soyad = soyad;

    // Asıl array'deki bilgiyi de güncelle
    let ogrenciIndex = ogrenciler.indexOf(ogrenci);
    if (ogrenciIndex !== -1) {
      ogrenciler[ogrenciIndex].ad = ad;
      ogrenciler[ogrenciIndex].soyad = soyad;
    }

    // listeyi tekrar render et
    renderOgrenciler();
  } else {
    alert("Geçersiz sıra numarası!");
  }
}

//öğrenci alfabetik sıralama fonksiyon
function alfabetikSiralama() {
  ogrenciler.sort((a, b) => a.ad.localeCompare(b.ad));

  // listeyi tekrar render et
  renderOgrenciler();
}

//öğrenci rastgele öğrenci gösterme fonksiyon
function rastgeleOgrenciGoster() {
  let rastgeleIndex = Math.floor(Math.random() * filtrelenmisOgrenciler.length);
  let rastgeleOgrenci = filtrelenmisOgrenciler[rastgeleIndex];
  alert(
    `Rastgele Seçilen Öğrenci: ${rastgeleOgrenci.ad} ${rastgeleOgrenci.soyad}`
  );
}
//18 yaş üstü öğrencileri gösterme
function onsekizYasUstuOgr() {
  filtrelenmisOgrenciler = ogrenciler.filter((ogrenci) => ogrenci.yas > 18);

  // listeyi tekrar render et
  renderOgrenciler();
}
