//While Döngüsü Çalışması

console.log("0(dahil) ile 100(dahil) arasında 7'nin katları:");
let sayac = 0; //sayac'ın ilk değeri 0 olsun
while (sayac < 101) {
  //sayac değeri 101'den küçük olduğu sürece
  let kalan = sayac % 7; //sayac sayısının 7'ye bölümünden kalan
  if (kalan === 0) {
    //kalan 0 ise demek ki sayac 7'nin katıdır
    console.log(sayac); //sayac değerini yazdır
  }
  sayac++; //sayac değerini 1 arttır
}


console.log("0 ile 100 arasında(0 ve 100 hariç) 10'un katı olan sayıları")
let sayac1=1;
while(sayac1<100){
    let kalan1=sayac1%10;
    if(kalan1===0){
        console.log(sayac1)
    }
    sayac1++
}

console.log("0 ile 100 arasında(0 ve 100 hariç) tek sayıları(2'ye bölümünden kalan 1 olmalı) ")
let sayac2=1;
while(sayac2<100){
let kalan2=sayac2%2;
if(kalan2===1){
    console.log(sayac2)
}

    sayac2++;
}

console.log("0 ile 100 arasında(0 ve 100 hariç) çift sayıları(2'ye bölümünden kalan 0 olmalı) ")

let sayac3=1;
while(sayac3<100){

    let kalan3=sayac3%2;
    if(kalan3===0){
        console.log(sayac3)
    }
    sayac3++;


}
console.log("0 ile 10 arasında (0 dahil 10 dahil) yer alan sayıların karesini(kendisiyle çarpımı) ")
let sayac4=0;
while(sayac4<=10){

    let karesi=sayac4*sayac4;
    console.log(karesi)

    sayac4++;
}
console.log("0 ile 100 arasında(0 dahil 100 dahil) hem 3'ün ve hem 4'ün katı olan sayıları ")
let sayac5=0;
while(sayac5<=100){
    let ortakKat=sayac5%12; // 3 ve 4 ün en küçük ortak katı 12 dir
    if(ortakKat===0){
        console.log(sayac5)
    }
    sayac5++;

}

//For Döngüsü Çalışması
console.log("0 ile 100 arasında(0 ve 100 hariç) 10'un katı olan sayıları")
for(let sayi=1; sayi<100; sayi++){
    if(sayi%10===0){
        console.log(sayi)
    }
}   

console.log("0 ile 100 arasında(0 ve 100 hariç) tek sayıları(2'ye bölümünden kalan 1 olmalı) ")

for(let sayi=1; sayi<100; sayi++){
    if(sayi%2===1){
        console.log(sayi)
    }
}

console.log("0 ile 100 arasında(0 ve 100 hariç) çift sayıları(2'ye bölümünden kalan 0 olmalı) ")

for(let sayi=1; sayi<100; sayi++){
    if(sayi%2===0){
        console.log(sayi)
    }
}

console.log("0 ile 10 arasında (0 dahil 10 dahil) yer alan sayıların karesini(kendisiyle çarpımı) ")
for(let sayi=0; sayi<=10;sayi++){
    let karesi=sayi*sayi;
    console.log(karesi);

}

console.log("0 ile 100 arasında(0 dahil 100 dahil) hem 3'ün ve hem 4'ün katı olan sayıları ")

for(let sayi=0; sayi<=100; sayi++){
    if(sayi%12===0){
        console.log(sayi)
    }
}