//3 parametre ortalaması döndüren fonksiyon

function ortalama(a, b, c) {
  return (ortala = (a + b + c) / 3);
}
console.log(ortalama(20, 30, 40));

//hangisiBuyuk adında fonksiyon örneği

function hangisiBuyuk(a, b) {
  if (a > b) {
    return 1;
  } else {
    return 2;
  }
}
console.log(hangisiBuyuk(10, 20));

//"tekmi" adında bir fonksiyon oluşturuyoruz, fonksiyon kendisine verilen 1 sayı değeri eğer tek ise true, değilse false boolean değeri döndürsün.

function tekmi(a) {
  if (a % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(tekmi(20));

//hesapmakinesi fonksiyon örnek

function hesapMakinesi(opr, sayi1, sayi2) {
  if (opr == "+") {
    return sayi1 + sayi2;
  } else if (opr == "-") {
    return sayi1 - sayi2;
  } else if (opr == "*") {
    return sayi1 * sayi2;
  } else if (opr == "/") {
    if (sayi2 != 0) {
      return sayi1 / sayi2;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(hesapMakinesi("/", 10, 5));
console.log(hesapMakinesi("*", 10, 5));
console.log(hesapMakinesi("+", 10, 5));
console.log(hesapMakinesi("-", 10, 5));
