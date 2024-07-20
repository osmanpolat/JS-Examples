//prompt arayüzü kullanarak matematik işlemleri

let sayi1 = prompt("Lütfen bir sayi giriniz :");

if (sayi1 != null) {
  var operator = prompt("Lütfen +,-,/,* işlemlerinden birini giriniz");
}
if (operator != null) {
  var sayi2 = prompt("Lütfen ikinci bir sayı giriniz :");
}
if (operator == "+") {
  let sonuc = parseInt(sayi1) + parseInt(sayi2);
  document.querySelector("p").innerHtml =
    sayi1 + operator + sayi2 + "=" + sonuc;
  console.log(sonuc);
}
if (operator == "-") {
  let sonuc = parseInt(sayi1) - parseInt(sayi2);
  document.querySelector("p").innerHtml =
    sayi1 + operator + sayi2 + "=" + sonuc;
  console.log(sonuc);
}
if (operator == "*") {
  let sonuc = parseInt(sayi1) * parseInt(sayi2);
  document.querySelector("p").innerHtml =
    sayi1 + operator + sayi2 + "=" + sonuc;
  console.log(sonuc);
}
if (operator == "/") {
  let sonuc = parseInt(sayi1) / parseInt(sayi2);
  document.querySelector("p").innerHtml =
    sayi1 + operator + sayi2 + "=" + sonuc;
  console.log(sonuc);
}
