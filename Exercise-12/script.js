//Window devicePixelRatio örneği

if (devicePixelRatio === 1) {
  document.querySelector("#prgf1").innerHtml = "Width: " + outerWidth;
  document.querySelector("#prgf2").innerHtml = "Height: " + outerHeight;
  document.querySelector("#prgf3").innerHtml = "Ratio: " + devicePixelRatio;
} else {
  document.querySelector("#prgf1").innerHtml =
    "Width: " + outerWidth * devicePixelRatio;
  document.querySelector("#prgf2").innerHtml =
    "Height: " + outerHeight * devicePixelRatio;
  document.querySelector("#prgf3").innerHtml = "Ratio: " + devicePixelRatio;
}
console.log(devicePixelRatio);
console.log(outerWidth);
console.log(outerHeight);

///Prompt(), location.href, alert kullanımı

let sayi = parseInt(prompt("1,2 ve 3 sayısından birini giriniz"));
if (sayi >= 1 && sayi < 4) {
  location.href = "https://www.google.com";
} else {
  alert("Girilen sayı geçersiz");
}


