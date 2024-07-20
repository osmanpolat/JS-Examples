//bisiklet  kiralama nesnesi ve fonksiyon örneklemesi
const bisikletKiralama = {
     ad: "Efe",
    soyad: "Orman", 
    gunFiyat: 20, 
    kacGun: 7,
    borcHesapla:function(){

        console.log(this.gunFiyat*this.kacGun)
    }
 };

 bisikletKiralama.borcHesapla()


 //bisiklet kiralama örnekleme-2

 const bisikletKiralama2 = {
    ad: "Efe",
   soyad: "Orman", 
   gunFiyat: 20, 
   kacGun: 7,
   borcHesapla:function(){
    let tutar;

    if(this.kacGun<7){
    tutar=this.gunFiyat*this.kacGun;
   }
   else if(this.kacGun>=7 && this.kacGun<=14){

    tutar=(this.gunFiyat*this.kacGun)*0.9
   }
   else if(this.kacGun>14){
    tutar=(this.gunFiyat*this.kacGun)*0.75
   }
   return tutar*1.18
}

 }

console.log(bisikletKiralama2.borcHesapla())
let borcTutari = bisikletKiralama2.borcHesapla();
console.log( "Sayın: " + bisikletKiralama2.ad + " " + bisikletKiralama2.soyad + " Borcunuz: " + borcTutari  );
